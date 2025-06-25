import { SupplierService } from "services/SupplierService";
import { Response } from 'express'

export class SupplierController {
    constructor(public supplierService: SupplierService) {
    }
    async create(req, res: Response) {
        req.body.userId = req.user?.id
        const [status, message] = await this.supplierService.create(req.body)
        res.status(status).json({ message })
    }
    async update(req, res) {
        const [status, message] = await this.supplierService.update(req.body)
        res.status(status).json({ message })
    }
    async delete(req, res) {
        const [status, message] = await this.supplierService.delete(+req.query.id)
        res.status(status).json({ message })
    }
}