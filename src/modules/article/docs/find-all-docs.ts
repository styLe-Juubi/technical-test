import { ApiOperationOptions, ApiResponseOptions } from "@nestjs/swagger";
import { IPaginateResponse } from "src/common/interfaces/paginate-response.interface";
import { IArticle } from "../interfaces/article.interface";

const articleResponseOK: IPaginateResponse<IArticle> = {
    "docs": [
        {
            "id": "741859DIEH",
            "name": "Tercer Articulo",
            "description": "asda lsd lasd kaslkd jasdlj alsjd jlasjld asjdad",
            "price": 10.99,
            "model": "Seccion1",
            "updatedAt": "Friday, September 27, 2024",
            "createdAt": "Friday, September 27, 2024"
        },
        {
            "id": "4219T6UPL0",
            "name": "Segundo Articulo",
            "description": "asda lsd lasd kaslkd jasdlj alsjd jlasjld asjdad",
            "price": 10.99,
            "model": "Seccion1",
            "updatedAt": "Friday, September 27, 2024",
            "createdAt": "Friday, September 27, 2024"
        },
        {
            "id": "0857LGDV4F",
            "name": "Primer Articulo",
            "description": "asda lsd lasd kaslkd jasdlj alsjd jlasjld asjdad",
            "price": 10.99,
            "model": "Seccion1",
            "updatedAt": "Friday, September 27, 2024",
            "createdAt": "Friday, September 27, 2024"
        }
    ],
    "totalDocs": 3,
    "limit": 10,
    "totalPages": 1,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": false,
    "prevPage": null,
    "nextPage": null
}

export const findAllApiOperation: ApiOperationOptions = {
    description: "This method find all articles."
};
export const findAllApiOkResponse: ApiResponseOptions = {
    description: "When the article record is found successfully, the following response is displayed.",
    example: articleResponseOK
}
export const findAllApiBadRequest: ApiResponseOptions = {
    description: "When unregistered parameters are sent, the request becomes a bad request.",
    example: {
        "statusCode": 400,
        "message": [
            "property anotherProp should not exist"
        ],
        "error": "Bad Request"
    }
}
export const findAllApiNotFoundRequest: ApiResponseOptions = {
    description: "When no registered articles are found the response will be the following.",
    example: {
        "statusCode": 404,
        "message": "Documents not found",
        "error": "Not Found"
    }
}