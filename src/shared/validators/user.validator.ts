import { UserDto } from "shared/dto/users/user.dto";
import { StrValidator } from "./types.validator/StrValidator";


export function userValidator (dto: UserDto ): string[] | undefined{
    const errors = []
    if (!StrValidator.make(dto.email).isEmail()){ 
        errors.push('Не похоже на почту');
    }
    if (!StrValidator.make(dto.password).isPassword()){
         errors.push("Выберите другой пароль");
    }
    if (!StrValidator.make(dto.phoneNumber).isString()){
        errors.push("Слишком странный номер телефона, запишите в формате 0901231212 или +380901231212");
    }
    if (!StrValidator.make(dto.firstName).isString()){
        errors.push("А имя ли это?");
    }
    if (!StrValidator.make(dto.lastName).isString()){
        errors.push("А фамилия ли это?");
    }
    if (!StrValidator.make(dto.companyName).isString()){
        errors.push("Слишком короткое или слишком длинное название компании");
    }
    if (errors.length !== 0) return errors
    return undefined
}

