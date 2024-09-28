import { Aggregate, AggregatePaginateResult, PaginateResult } from 'mongoose';
import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";

import { PaginationDto } from '../dtos/pagination.dto';
import { IField } from "../interfaces/find-by-fields.interface";
import { IGenericService } from "../interfaces/generic-service.interface";
import { IConfigPagination } from "../interfaces/config-pagination.interface";
import { IPopulateField } from '../interfaces/populate-field.interface';
import { DB_TYPES } from '../enums/db.enum';
import { MongodbService } from './mongodb.service';

@Injectable()
export class GenericService implements IGenericService {

  public logger: Logger = new Logger( this.serviceName );
  private mongodbService: MongodbService;

  constructor(
    readonly defaultPagination: IConfigPagination,
    private readonly serviceName: string,
    private readonly db: string,
    private readonly docModel?: any,
    private readonly entityModel?: any,
  ) { 

    if ( db === DB_TYPES.mongo ) {
      this.mongodbService = new MongodbService( defaultPagination, this.logger );
    }
  }

  /** 
    * ! -------------------- !! -------------------- !! -------------------- !
    * *                        CRUD Service functions                        *
    * *                        Logic CRUD to database                        *
    * ! -------------------- !! -------------------- !! -------------------- !
    */
  
  async create<T,U>( createDto: T ): Promise<U> {
    createDto = {
      ...createDto,
      id: this.uniqueID(),
      updatedAt: this.currentDate(),
      createdAt: this.currentDate(),
    }

    if ( this.db === DB_TYPES.mongo ) {

      return this.mongodbService
        .create<T,U>( createDto, this.docModel, this.logger );

    } else if( this.db === DB_TYPES.postgres ) {

    } 
  }

  async findAll<T,U extends PaginationDto>(
    queries: U, 
    populate: IPopulateField[] = undefined, 
    aggregate: Aggregate<T[]> = undefined,
  ): Promise<PaginateResult<T> | AggregatePaginateResult<T>> {

    if ( this.db === DB_TYPES.mongo ) {

      return this.mongodbService
        .findAll( this.docModel, queries, populate, aggregate );

    } else if( this.db === DB_TYPES.postgres ) {

    } 
  }

  async findOne<T>( id: string, populate: IPopulateField[] = undefined ): Promise<T> {
    if ( this.db === DB_TYPES.mongo ) {

      return this.mongodbService
        .findOne( this.docModel, id, populate );

    } else if( this.db === DB_TYPES.postgres ) {

    } 
  }

  async update<T,U>( id: string, updateDto: U ): Promise<T> {
    if ( this.db === DB_TYPES.mongo ) {

      return this.mongodbService
        .update( this.docModel, id, updateDto );

    } else if ( this.db === DB_TYPES.postgres ) {

    }
  }

  async delete<T>( id: string ): Promise<T> {
    if ( this.db === DB_TYPES.mongo ) {

      return this.mongodbService
        .delete( this.docModel, id );

    } else if ( this.db === DB_TYPES.postgres ) {

    }
  }

  /** 
    * ! -------------------- !! -------------------- !! -------------------- !
    * *                          Another functions                           *
    * *                                                                      *
    * ! -------------------- !! -------------------- !! -------------------- !
    *
    */
  uniqueID(): string {

    let firstPart: number| string = (Math.random() * 46656) | 0;
    let secondPart: number| string = (Math.random() * 46656) | 0;

    const today = Date.now().toString().slice(-4);
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);

    return (today + firstPart + secondPart).toUpperCase();
  }

  currentDate(): string {
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();

    return today.toLocaleDateString("en-US", options);
  }
}