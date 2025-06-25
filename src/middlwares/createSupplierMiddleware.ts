import { SupplierRegisterDto } from "../shared/dto/suppliers/register-supplier.dto";
import { supplierValidator } from "../shared/validators/supplier.validator";

export function createSupplierMiddleware(req, res, next) {
    const dto: SupplierRegisterDto = req.body
    const errors = supplierValidator(dto)
    if (errors) {
        const err = errors.join('\n')
        res.status(400).json({ message: err })
        return
    }
    next()
}