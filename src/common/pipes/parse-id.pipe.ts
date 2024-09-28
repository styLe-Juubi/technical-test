import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {

    const isValid: boolean = /^[a-z0-9]{10}$/i.test( value );

    if(!isValid)
      throw new BadRequestException(`${ value } is not a valid id`);
    
    return value;
  }
}
