import { ShopService } from 'services/ShopService';
import { Response } from 'express'
import { renderResult } from "../extensions/renderResult";

export class ShopController {
    constructor(public shopService: ShopService) {
    }
    async create(req, res: Response) {
        req.body.userId = req.user?.id
        const [status, message] = await this.shopService.create(req.body)
        renderResult(res, status, message)
    }
    async update(req, res) {
        const [status, message] = await this.shopService.update(req.body)
        renderResult(res, status, message)
    }
    async delete(req, res) {
        const [status, message] = await this.shopService.delete(+req.query.id)
        renderResult(res, status, message)
    }
}