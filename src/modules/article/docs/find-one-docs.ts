import { ApiOperationOptions, ApiResponseOptions } from "@nestjs/swagger";
import { IArticle } from "../interfaces/article.interface";

const articleResponseOK: IArticle = {
    "id": "0857LGDV4F",
    "name": "Primer Articulo",
    "description": "asda lsd lasd kaslkd jasdlj alsjd jlasjld asjdad",
    "price": 10.99,
    "model": "Seccion1",
    "updatedAt": "Friday, September 27, 2024",
    "createdAt": "Friday, September 27, 2024"
}

export const findOneApiOperation: ApiOperationOptions = {
    description: "This method find one article with the next regex pattern: /^[a-z0-9]{10}$/i"
}
export const findOneApiOkResponse: ApiResponseOptions = {
    description: "When the article record is found successfully, the following response is displayed.",
    example: articleResponseOK
}
export const findOneApiBadRequest: ApiResponseOptions = {
    description: "When an invalid id is sent, the following error is sent.",
    example: {
        "statusCode": 400,
        "message": "8718CC0KGCa is not a valid id",
        "error": "Bad Request"
    }
}
export const findOneApiNotFoundRequest: ApiResponseOptions = {
    description: "When the item is not found, the following error will be sent.",
    example: {
        "statusCode": 404,
        "message": "doc with id: 8718CC0KGD not found",
        "error": "Not Found"
    }
}