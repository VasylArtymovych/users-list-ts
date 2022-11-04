import { isValidObjectId } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../helpers';

export const isValidId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const valid = isValidObjectId(id);
  if (!valid) {
    throw new CustomError(`${id} is not valid Id.`, 400, 'Provide valid user Id.');
  }
  next();
};
