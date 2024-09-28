import { ApiBodyOptions, ApiOperationOptions, ApiResponseOptions } from "@nestjs/swagger";
import { CreateArticleDTO } from "../dto/create-article.dto";
import { IArticle } from "../interfaces/article.interface";

const createArticleExample: CreateArticleDTO = {
    name: "ASUS RTX 4090",
    description: "NVIDIA RTX 4090 Graphic Card",
    price: 1600.99,
    model: "RTX4090"
}
const articleResponseOK: IArticle = {
    id: "123456789A",
    name: "ASUS RTX 4090",
    description: "NVIDIA RTX 4090 Graphic Card",
    price: 1600.99,
    model: "RTX4090",
    updatedAt: "Friday, September 27, 2024",
    createdAt: "Friday, September 27, 2024",
}

export const createApiOperation: ApiOperationOptions = {
    description: "This method works to create an article."
};
export const createApiBody: ApiBodyOptions = {
    type: CreateArticleDTO,
    examples: {
        a: {
            summary: "Article Body",
            value: createArticleExample as CreateArticleDTO
        },
    }
}
export const createApiOkResponse: ApiResponseOptions = {
    description: "When the registration is successful, the information of the registered item is returned.",
    example: articleResponseOK
}
export const createApiBadRequest: ApiResponseOptions = {
    description: "When the registration is a bad request, the response will be the following depending on the error when making the request.",
    example: {
        "statusCode": 400,
        "message": [
            "name must be shorter than or equal to 20 characters"
        ],
        "error": "Bad Request"
    }
}