import { SupplierRegisterDto } from "../shared/dto/suppliers/register-supplier.dto";
import { supplierValidator } from "../shared/validators/supplier.validator";

export function createSupplierMiddleware(req, res, next) {
    const dto: SupplierRegisterDto = req.body
    const errors = supplierValidator(dto)
    if (errors) {
        const err = errors.join('\n')
        res.render('errors',{errors: err})
        return
    }
    next()
}