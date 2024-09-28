import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDTO } from './dto/create-article.dto';
import { UpdateArticleDTO } from './dto/update-article.dto';
import { PaginateResult } from 'mongoose';
import { Article } from './entities/article.schema';
import { ApiBadRequestResponse, ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { createApiBadRequest, createApiBody, createApiOkResponse, createApiOperation } from './docs/create-docs';
import { IArticle } from './interfaces/article.interface';
import { ParseIdPipe } from 'src/common/pipes/parse-id.pipe';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { findAllApiBadRequest, findAllApiNotFoundRequest, findAllApiOkResponse, findAllApiOperation } from './docs/find-all-docs';
import { findOneApiBadRequest, findOneApiNotFoundRequest, findOneApiOkResponse, findOneApiOperation } from './docs/find-one-docs';
import { updateApiBadRequest, updateApiBody, updateApiNotFoundRequest, updateApiOkResponse, updateApiOperation } from './docs/update-docs';
import { deleteApiBadRequest, deleteApiNotFoundRequest, deleteApiOkResponse, deleteApiOperation } from './docs/delete-docs';
  
@ApiTags('Articles')
@Controller('article')
export class ArticleController {
  
  constructor(
    private readonly articleService: ArticleService,
  ) {}

  @ApiOperation( createApiOperation )
  @ApiBody( createApiBody )
  @ApiOkResponse( createApiOkResponse )
  @ApiBadRequestResponse( createApiBadRequest )
  @Post()
  async create( @Body() dto: CreateArticleDTO ) {
    return this.articleService
      .create<CreateArticleDTO, IArticle>( dto );
  }
  
  @ApiOperation( findAllApiOperation )
  @ApiOkResponse( findAllApiOkResponse )
  @ApiBadRequestResponse( findAllApiBadRequest )
  @ApiNotFoundResponse( findAllApiNotFoundRequest )
  @Get()
  async findAll( @Query() queryParams: PaginationDto, ) {
    return this.articleService
      .findAll<PaginateResult<Article>, any>( queryParams );
  }

  @ApiOperation( findOneApiOperation )
  @ApiOkResponse( findOneApiOkResponse )
  @ApiBadRequestResponse( findOneApiBadRequest )
  @ApiNotFoundResponse( findOneApiNotFoundRequest )
  @Get(':id')
  async findOne( @Param('id', ParseIdPipe) id: string ) {
    return this.articleService.findOne( id );
  }

  @ApiOperation( updateApiOperation )
  @ApiBody( updateApiBody )
  @ApiOkResponse( updateApiOkResponse )
  @ApiBadRequestResponse( updateApiBadRequest )
  @ApiNotFoundResponse( updateApiNotFoundRequest )
  @Patch(':id')
  async update(
    @Param('id', ParseIdPipe) id: string,
    @Body() dto: UpdateArticleDTO,
  ) {
    return this.articleService.update( id, dto );
  }

  @ApiOperation( deleteApiOperation )
  @ApiOkResponse( deleteApiOkResponse )
  @ApiBadRequestResponse( deleteApiBadRequest )
  @ApiNotFoundResponse( deleteApiNotFoundRequest )
  @Delete(':id')
  async delete(@Param('id', ParseIdPipe) id: string) {
    return this.articleService.delete( id );
  }

}