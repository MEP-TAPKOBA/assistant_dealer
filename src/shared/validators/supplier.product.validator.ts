import { SupplierProductDto } from "../../shared/dto/suppliers/supplier-product.dto";
import { StrValidator } from "./types.validator/StrValidator";
import { NumValidator } from "./types.validator/NumValidator";

export function supplierProductValidator(dto: SupplierProductDto): string[] | undefined {
    const errors = []
    if (!NumValidator.make(dto.supplierId).isNum()) {
        errors.push('Некорректный ID поставщика')
    }
    if (!StrValidator.make(dto.name).isString()) {
        errors.push('Некорректное название товара')
    }
    if (!StrValidator.make(dto.category).isString()) {
        errors.push('Некорректная категория товара')
    }
    if (!StrValidator.make(dto.description).isString()) {
        errors.push('Некорректное описание товара')
    }
    if (!NumValidator.make(dto.description).isNum()) {
        errors.push('Некорректная цена товара')
    }
    if (errors.length !== 0) return errors
    return undefined
}