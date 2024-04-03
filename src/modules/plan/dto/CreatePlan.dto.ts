import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlanDto {
    @IsNotEmpty()
    @IsString()
    planId: string;

    @IsNotEmpty()
    @IsString()
    planTitle: string;

    @IsNotEmpty()
    @IsNumber()
    planPrice: number;
}