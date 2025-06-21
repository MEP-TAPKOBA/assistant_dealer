import { ShopService } from 'services/ShopService';
import { Response } from 'express'

export class ShopController {
    constructor(public shopService: ShopService){
    }
    async create(req, res: Response){
        req.body.userId = req.user?.id
        const [status, message] = await this.shopService.create(req.body)
        res.status(status).json({message})
    }
    async update(req,res){ 
        const [status,message] = await this.shopService.update(req.body)
        res.status(status).json({message})
    }
    async delete(req,res){
        const [status,message] = await this.shopService.delete(+req.query.id)
        res.status(status).json({message})
    }
}