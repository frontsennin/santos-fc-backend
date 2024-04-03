import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePlanDto {
    @IsOptional()
    @IsString()
    planId: string;

    @IsOptional()
    @IsString()
    planTitle: string;

    @IsOptional()
    @IsNumber()
    planPrice: number;
}