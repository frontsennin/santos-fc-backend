import { IsNotEmpty, IsString } from "class-validator";
import { PlanModel } from "../../../models/plan.model";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    cpf: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    profilePicture: string;

    @IsNotEmpty()
    plan: PlanModel;
}