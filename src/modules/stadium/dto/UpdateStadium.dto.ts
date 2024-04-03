import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateStadiumDto {
    @IsOptional()
    @IsNumber()
    stadiumId: number;

    @IsOptional()
    @IsString()
    stadiumTitle: string;

    @IsOptional()
    @IsString()
    stadiumLocation: string;

    @IsOptional()
    @IsNumber()
    matchMaxWatchers: number;
}