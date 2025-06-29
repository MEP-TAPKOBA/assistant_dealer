import { SupplierProductService } from "services/SupplierProductService";
import { renderResult } from "../extensions/renderResult";

export class SupplierProductController {
    constructor(public supplierProductService: SupplierProductService) { }
    async create(req, res) {
        const [status, message] = await this.supplierProductService.create(req.body)
        renderResult(res, status, message)
    }
    async update(req, res) {
        const [status, message] = await this.supplierProductService.update(req.body)
        renderResult(res, status, message)
    }
    async delete(req, res) {
        const [status, message] = await this.supplierProductService.delete(+req.query.id)
        renderResult(res, status, message)
    }
}