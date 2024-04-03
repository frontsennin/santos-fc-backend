import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMatchDto {
    @IsNotEmpty()
    @IsNumber()
    matchId: number;

    @IsNotEmpty()
    @IsString()
    matchTitle: string;

    @IsNotEmpty()
    @IsString()
    homeTeam: string;

    @IsNotEmpty()
    @IsString()
    awayTeam: string;

    @IsNotEmpty()
    @IsDate()
    matchDate: Date;

    @IsNotEmpty()
    @IsString()
    matchStadiumId: string;

    @IsNotEmpty()
    @IsNumber()
    matchMaxWatchers: number;
}