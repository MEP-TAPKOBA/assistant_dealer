import { RegisterShopDto } from "../../shared/dto/shop/register-shop.dto";
import { StrValidator } from "./types.validator/StrValidator";

export function shopValidator(dto: RegisterShopDto): string[] | undefined {
    const errors = []
    if (!StrValidator.make(dto.name).isString()) {
        errors.push('Не похоже на имя');
    }
    if (!StrValidator.make(dto.adress).isString()) {
        errors.push('Не похоже на адрес')
    }
    if (errors.length !== 0) return errors
    return undefined
}

