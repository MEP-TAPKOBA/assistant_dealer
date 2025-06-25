import { supplierProductValidator } from "../shared/validators/supplier.product.validator"
import { SupplierProductDto } from "../shared/dto/suppliers/supplier-product.dto"

export function createSupplierProductMiddleware(req, res, next) {
    const dto: SupplierProductDto = req.body
    const errors = supplierProductValidator(dto)
    if (errors) {
        const err = errors.join('\n')
        res.status(400).json({ message: err })
        return
    }
    next()
}