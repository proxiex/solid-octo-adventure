import  { Request, Response, NextFunction } from "express";
import { apiCall, User } from '../utils';
class Users {
    async getAllUsers(_req: Request, res: Response, next: NextFunction) {
        try {
            const results = await apiCall<User[]>();
            return res.json({data: results})
        } catch (error) {
            next(error)
        }
    }

    async getOneUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { params: { id }} = req;
            const userId:number = Number(id);
            const results = await apiCall<User[]>(userId);
            return res.json({data: results})
        } catch (error) {
            next(error)
        }
    }

    async searchUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { query: { q }} = req;
            const results = await apiCall<User[]>();
            let userData;
            userData = results.find(user => user.name === q);

            return res.json({
                data: userData
            })
        } catch (error) {
            next(error)
        }
    }
}

const usersConteroller: Users = new Users();
export default usersConteroller;
