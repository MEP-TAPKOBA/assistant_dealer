import { SupplierRegisterDto } from "../../shared/dto/suppliers/register-supplier.dto";
import { StrValidator } from "./types.validator/StrValidator";


export function supplierValidator(dto: SupplierRegisterDto): string[] | undefined {
    const errors = []
    if (!StrValidator.make(dto.name).isString()) {
        errors.push('Не похоже на имя');
    }
    if (!StrValidator.make(dto.productCategoty).isString()) {
        errors.push("Неверная категория продукта");
    }
    if (!StrValidator.make(dto.description).isString(3, 300)) {
        errors.push("Неверная информация поставщика");
    }
    if (!StrValidator.make(dto.phoneNumber).isString()) {
        errors.push("Слишком странный номер телефона, запишите в формате 0901231212 или +380901231212");
    }
    if (!StrValidator.make(dto.website).isString()) {
        errors.push("Неправильный веб - сайт");
    }
    if (errors.length !== 0) return errors
    return undefined
}
