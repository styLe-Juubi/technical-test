import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { PaginationDto } from "../dtos/pagination.dto";
import { IPopulateField } from "../interfaces/populate-field.interface";
import { Aggregate, AggregatePaginateResult, PaginateResult } from "mongoose";
import { IConfigPagination } from "../interfaces/config-pagination.interface";

@Injectable()
export class MongodbService {

    constructor(
        readonly defaultPagination: IConfigPagination,
        readonly logger: Logger,
    ) {}

    async create<T,U>( createDto: T, docModel: any, logger: Logger ): Promise<U> {
        try {
            return await docModel.create( createDto );
            
        } catch (error) { await this.handleExceptions( error ) };
    }

    async findAll<T,U extends PaginationDto>(
        docModel: any,
        queries: U, 
        populate: IPopulateField[] = undefined, 
        aggregate: Aggregate<T[]> = undefined,
      ): Promise<PaginateResult<T> | AggregatePaginateResult<T>> {
    
        const { defaultPage, defaultLimit, defaultOrder } = this.defaultPagination;
        const { page = defaultPage, limit = defaultLimit, order = defaultOrder, ...query } = queries;
    
        let docs: PaginateResult<T> | AggregatePaginateResult<T>;
        if ( !aggregate ) {
    
          if ( !populate ) {
            docs = await docModel.paginate( query, { page, limit, ...order });
          } else {
            docs = await docModel.paginate( query, { page, limit, ...order, populate });
          }
    
        } else {
    
          docs = await docModel.aggregatePaginate( aggregate, { page, limit, ...order });
          
        }
        
        if ( !docs || docs.docs.length === 0 )
          throw new NotFoundException(`Documents not found`);
    
        return docs;
      }
    
      async findOne<T>( docModel: any, id: string, populate: IPopulateField[] = undefined ): Promise<T> {
        let doc: T;
        if ( !populate ) {
    
          doc = await docModel.findOne({ id });
        } else {
          
          doc = await docModel.findOne({ id }).populate(populate);
        }
        
        if ( !doc )
          throw new NotFoundException(`doc with id: ${ id } not found`);
    
        return doc;
      }
    
    async update<T,U>( docModel: any, id: string, updateDto: U ): Promise<T> {
        await this.findOne( docModel, id );
    
        try {
          return await docModel.findOneAndUpdate({ id }, updateDto, { new: true });
          
        } catch (error) { await this.handleExceptions( error ) };
    }
    
      async delete<T>( docModel: any, id: string ): Promise<T> {
        const doc: T = await this.findOne( docModel, id );
    
        try {
          await docModel.findOneAndDelete({ id });
          return doc;
          
        } catch (error) { await this.handleExceptions( error ) };
      }

    /** 
    * ! -------------------- !! -------------------- !! -------------------- !
    * *                       Handle Exceptions Errors                       *
    * *                                                                      *
    * ! -------------------- !! -------------------- !! -------------------- !
    */
    private async handleExceptions( error: any ): Promise<void> {
        if ( error.code === 11000 ) 
          throw new ConflictException(`${ Object.keys( error.keyPattern ) } property value already exist`);
          
        this.logger.error( error );
        throw new InternalServerErrorException('Unexpected error, check server logs');
    }
}