import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Matches, MaxLength } from "class-validator";

export class CreateArticleDTO {

    // @IsOptional()
    // @Matches(/^[a-z0-9]+$/i)
    // readonly id?: string;

    @ApiProperty({
        type: String,
        description: "alphanumeric property with a maximum of 20 characters"
    })
    @IsString()
    @Matches(/^[a-z\d\-_\s]+$/i)
    @MaxLength(20)
    readonly name: string;

    @ApiProperty({
        type: String,
        description: "alphanumeric property with a maximum of 200 characters"
    })
    @IsString()
    @Matches(/^[a-z\d\-_\s]+$/i)
    @MaxLength(200)
    readonly description: string;

    @ApiProperty({
        type: Number,
        description: "number property with a maximum of two decimal places"
    })
    @IsNumber({ maxDecimalPlaces: 2 }, { 
        message: 'price can only contain a maximum of two decimal places'
    })
    readonly price: number;
    
    @ApiProperty({
        type: String,
        description: "alphanumeric property with a maximum of 10 characters"
    })
    @IsString()
    @Matches(/^[a-z\d\-_\s]+$/i)
    @MaxLength(10)
    readonly model: string;
}
