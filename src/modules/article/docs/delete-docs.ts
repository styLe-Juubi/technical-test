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

export const deleteApiOperation: ApiOperationOptions = {
    description: "This method delete an article with the next regex pattern: /^[a-z0-9]{10}$/i"
}
export const deleteApiOkResponse: ApiResponseOptions = {
    description: "When the article record is delete successfully, returns the information of the deleted article.",
    example: articleResponseOK
}
export const deleteApiBadRequest: ApiResponseOptions = {
    description: "When an invalid id is sent, the following error is sent.",
    example: {
        "statusCode": 400,
        "message": "8718CC0KGCa is not a valid id",
        "error": "Bad Request"
    }
}
export const deleteApiNotFoundRequest: ApiResponseOptions = {
    description: "When the item is not found, the following error will be sent.",
    example: {
        "statusCode": 404,
        "message": "doc with id: 8718CC0KGD not found",
        "error": "Not Found"
    }
}