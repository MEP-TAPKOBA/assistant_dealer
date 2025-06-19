import { SupplierProductService } from "services/SupplierProductService";

export class SupplierProductController{
    constructor(public supplierProductService:SupplierProductService){}
    async create(req, res){
        const [status,message] = await this.supplierProductService.create(req.body)
        res.status(status).json({message})
    }
}