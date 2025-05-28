import { UserDto } from "shared/dto/users/user.dto";

export function userValidator (dto: UserDto ):  string | undefined{
    if (typeof dto.email !== 'string' || !dto.email.includes("@") || !dto.email.includes(".")){ 
        return 'Не похоже на почту';
    }
    const emailEmptyEscaped = dto.email.replace(/[\t\s\r\n]+/g, '').trim()
    if (emailEmptyEscaped.length < 8 || emailEmptyEscaped.length > 25){
         return 'Очень странная почта, не пойдет';
    }
    if (typeof dto.password !== 'string' ||dto.password.length < 8 || dto.password.length > 25){
         return 'Пароль должен быть от 8 до 25 символов'
    }
    if (typeof dto.phoneNumber !== 'string' || dto.phoneNumber.length < 10 || dto.phoneNumber.length > 16){
        return "Слишком странный номер телефона, запишите в формате 0901231212 или +380901231212"
    }
    if (typeof dto.firstName !== 'string' || dto.firstName.length < 2 || dto.firstName.length > 12){
        return "Слишком длинное или короткое имя"
    }
    if (typeof dto.lastName !== 'string' || dto.lastName.length < 2 || dto.lastName.length > 25){
        return "Слишком длинная или короткая фамилия"
    }
    if (typeof dto.companyName !== 'string' || dto.companyName.length < 4 || dto.companyName.length > 30){
        return "Слишком короткое или слишком длинное название компании"
    }
    return undefined
}

