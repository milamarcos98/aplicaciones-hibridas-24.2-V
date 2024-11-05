import Joi from "joi";

export const cursosValidacion = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(30).required(),
        description: Joi.string().min(10).max(250).required(),
        tags: Joi.array().items(Joi.string())
    });
    return schema.validate(data)
}