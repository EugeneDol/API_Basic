import express from 'express';
import { createUser, getUser, finfUserById, deleteById, updateById } from '../contollers/users.js';


const router = express.Router();

// all routes in here starts with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', finfUserById);

router.delete('/:id', deleteById);

router.patch('/:id', updateById);

export default router;