import { IsNumber, IsObject, IsOptional, IsPositive, Max, Min  } from "class-validator";
import { ValidateObjectProps } from "../decorators/validate-object-properties.decorator";
import { IFieldQueryValidation } from "../interfaces/field-validation.interface";
import { ApiPropertyOptional } from "@nestjs/swagger";

const SORT_FIELD: IFieldQueryValidation[] = [
    { field: 'sort', type: 'sort' },
];

interface Sort {
    sort: {
        _id: number;
    };
}

export class PaginationDto {

    @ApiPropertyOptional({
        type: Number,
        description: "current page."
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    readonly page?: number;

    @ApiPropertyOptional({
        type: Number,
        description: "limit per page."
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    readonly limit?: number;

    @ApiPropertyOptional({
        type: Number,
        description: "param: 'order[sort]' asc or desc values [1, -1]."
    })
    @IsOptional()
    @IsObject()
    @ValidateObjectProps(SORT_FIELD)
    readonly order?: Sort;
}
