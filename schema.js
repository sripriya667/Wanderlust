const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        location: Joi.string().pattern(new RegExp("^[a-zA-Z0-9\\s,]+$")).required(),
        country: Joi.string().pattern(new RegExp("^[a-zA-Z0-9\\s,]+$")).required(),
        images: Joi.string().allow("", null),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
        }).required(),
})