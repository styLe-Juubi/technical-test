import { ApiBodyOptions, ApiOperationOptions, ApiResponseOptions } from "@nestjs/swagger";
import { UpdateArticleDTO } from "../dto/update-article.dto";

const updateArticleExample: UpdateArticleDTO = {
    description: "description updated",
    model: "updated"
}

export const updateApiOperation: ApiOperationOptions = {
    description: "This method works to update an article."
};
export const updateApiBody: ApiBodyOptions = {
    type: UpdateArticleDTO,
    examples: {
        a: {
            summary: "Article Body",
            value: updateArticleExample as UpdateArticleDTO
        },
    }
}
export const updateApiOkResponse: ApiResponseOptions = {
    description: "When the action is successful, the information of the item is returned updated.",
    example: {
        "id": "8718CC0KGC",
        "name": "Primer Articulo",
        "description": "Actualizado",
        "price": 10.99,
        "model": "Seccion1",
        "updatedAt": "Friday, September 27, 2024",
        "createdAt": "Friday, September 27, 2024"
    }
}
export const updateApiBadRequest: ApiResponseOptions = {
    description: "When the registration is a bad request, the response will be the following depending on the error when making the request.",
    example: {
        "statusCode": 400,
        "message": [
            "property anotherProp should not exist"
        ],
        "error": "Bad Request"
    }
}
export const updateApiNotFoundRequest: ApiResponseOptions = {
    description: "When the item is not found, the following error will be sent.",
    example: {
        "statusCode": 404,
        "message": "doc with id: 8718CC0KGD not found",
        "error": "Not Found"
    }
}