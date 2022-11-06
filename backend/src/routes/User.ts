import { Router } from 'express';
import { UserController as ctrl } from '../controllers';
import { UserSchema } from '../schema';
import { validateBody, isValidId } from '../middleware';

const router = Router();

router.post('/create', validateBody(UserSchema), ctrl.addUser);
router.get('/', ctrl.getAllUsers);
router.patch('/update/:id', isValidId, validateBody(UserSchema), ctrl.updateUser);
router.delete('/delete/:id', isValidId, ctrl.deleteUser);

export default router;
