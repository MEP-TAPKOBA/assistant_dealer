import { SupplierService } from "services/SupplierService";
import { Response } from 'express'
import { renderResult } from "../extensions/renderResult";

export class SupplierController {
    constructor(public supplierService: SupplierService) {
    }
    async create(req, res: Response) {
        req.body.userId = req.user?.id
        const [status, message] = await this.supplierService.create(req.body)
        renderResult(res, status, message)
    }
    async update(req, res) {
        const [status, message] = await this.supplierService.update(req.body)
        renderResult(res, status, message)
    }
    async delete(req, res) {
        const [status, message] = await this.supplierService.delete(+req.query.id)
        renderResult(res, status, message)
    }
}