import {IsAlpha, IsEmail, IsEnum, IsPhoneNumber, IsString, MaxLength, MinLength} from "class-validator";
import {EmployeeConstant} from "../constants/employee.constant";

export class CreateEmployeeDto {
    @IsAlpha()
    @MinLength(6)
    @MaxLength(10)
    firstName: string
    @IsAlpha()
    @MinLength(6)
    @MaxLength(10)
    lastName: String
    @IsEmail()
    email: string
    @IsPhoneNumber()
    phone: string
    @IsString()
    @IsEnum(EmployeeConstant)
    gender: string
}