import { SupplierProductService } from "services/SupplierProductService";

export class SupplierProductController {
    constructor(public supplierProductService: SupplierProductService) { }
    async create(req, res) {
        const [status, message] = await this.supplierProductService.create(req.body)
        res.status(status).json({ message })
    }
    async update(req, res) {
        const [status, message] = await this.supplierProductService.update(req.body)
        res.status(status).json({ message })
    }
    async delete(req, res) {
        const [status, message] = await this.supplierProductService.delete(+req.query.id)
        res.status(status).json({ message })
    }
}