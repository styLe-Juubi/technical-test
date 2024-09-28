import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    DATABASE_SELECTED: Joi.string().required(),
    MONGODB: Joi.string(),
    POSTGRESQL: Joi.string(),
    PORT: Joi.number().default(3000),
    API_VERSION: Joi.string().default('api/v1'),
    PAGINATION_DEFAULT_PAGE: Joi.number().default(1),
    PAGINATION_DEFAULT_LIMIT: Joi.number().default(10),
    PAGINATION_DEFAULT_ORDER: Joi.number().default(-1),
})