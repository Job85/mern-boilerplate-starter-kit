import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ZodSchema } from 'zod';

const validate = (schema: ZodSchema): RequestHandler => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        console.log('Incoming body:', req.body);
        if (!result.success) {
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: result.error.errors,
            });
            return;
        }

        req.body = result.data;
        next();
    };
};

export default validate;