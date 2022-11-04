import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../helpers';
import { Loggin } from '../library';

export const unknownRoute = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Not Found.' });
};

export const errorHandler = (error: TypeError | CustomError, req: Request, res: Response, next: NextFunction) => {
  let custErr = error;

  if (!(error instanceof CustomError)) {
    custErr = new CustomError('Something went wrong.', 500, 'Try again later.');
  }
  Loggin.error(custErr.message);

  res.status((custErr as CustomError).status).json({ error: custErr.message, message: (custErr as CustomError).additionalInfo });
};
