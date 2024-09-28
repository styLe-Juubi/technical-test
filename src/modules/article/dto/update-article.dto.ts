import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, Matches, MaxLength } from "class-validator";

export class UpdateArticleDTO  { 

    @ApiPropertyOptional({
        type: String,
        description: "alphanumeric property with a maximum of 200 characters"
    })
    @IsOptional()
    @IsString()
    @Matches(/^[a-z\d\-_\s]+$/i)
    @MaxLength(200)
    readonly description: string;
    
    @ApiPropertyOptional({
        type: String,
        description: "alphanumeric property with a maximum of 10 characters"
    })
    @IsOptional()
    @IsString()
    @Matches(/^[a-z\d\-_\s]+$/i)
    @MaxLength(10)
    readonly model: string;
}
