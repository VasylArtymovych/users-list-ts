import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';
import { UserServices } from '../services';
import { IUserData } from '../interfaces';

class UserController {
  addUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.addUser(req.body as IUserData);

    res.status(201).json({ code: 201, status: 'success', user });
  });

  getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserServices.getAllUsers();

    res.status(200).json({ code: 200, status: 'success', users });
  });

  updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await UserServices.updateUser(id, req.body);

    res.status(200).json({ code: 200, status: 'success', user });
  });

  deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    await UserServices.deleteUser(id);
    res.status(200).json({ code: 200, status: 'success' });
  });
}

export default new UserController();
