import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStadiumDto {
    @IsNotEmpty()
    @IsNumber()
    stadiumId: number;

    @IsNotEmpty()
    @IsString()
    stadiumTitle: string;

    @IsNotEmpty()
    @IsString()
    stadiumLocation: string;

    @IsNotEmpty()
    @IsNumber()
    matchMaxWatchers: number;
}