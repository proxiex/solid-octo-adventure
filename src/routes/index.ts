import { Router } from 'express';
import users from '../controller';

const router: Router = Router();

router.get('/users', users.getAllUsers);
router.get('/users/search', users.searchUser);
router.get('/user/:id', users.getOneUser);

export default router;

