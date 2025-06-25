import { ProductInShopDto } from "../../shared/dto/shop/product-in-shop.dto";
import { StrValidator } from "./types.validator/StrValidator";
import { NumValidator } from "./types.validator/NumValidator";


export function productInShopValidator(dto: ProductInShopDto): string[] | undefined {
    const errors = []
    if (!NumValidator.make(dto.sellPrice).isNum()) {
        errors.push('Некорректная цена продажи');
    }
    if (!NumValidator.make(dto.quantity).isNum()) {
        errors.push('Некорректное количество')
    }
    if (errors.length !== 0) return errors
    return undefined
}

