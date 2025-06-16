import { AuthService } from "services/AuthService";
import { Request, Response } from 'express'


export class AppController {
    constructor(public authService: AuthService) {
    }
    async render(req: Request, res: Response) {
        const token = req.cookies?.token
        if (!token){
            res.render('index')
            return
        }
        res.redirect('/menu')
    }
    }
