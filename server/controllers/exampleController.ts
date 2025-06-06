import { Request, Response } from "express";

export const getExample = (req: Request, res: Response) => {
    res.json({ message: 'Got example from controller!' });
};

export const postExample = (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    res.status(201).json({
        success: true,
        messagge: 'Data received successfully!',
        data: { name, email, age },
    });
};