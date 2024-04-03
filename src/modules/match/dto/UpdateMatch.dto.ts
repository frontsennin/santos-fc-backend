import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateMatchDto {
    @IsOptional()
    @IsNumber()
    matchId: number;

    @IsOptional()
    @IsString()
    matchTitle: string;

    @IsOptional()
    @IsString()
    homeTeam: string;

    @IsOptional()
    @IsString()
    awayTeam: string;

    @IsOptional()
    @IsDate()
    matchDate: Date;

    @IsOptional()
    @IsString()
    matchStadiumId: string;

    @IsOptional()
    @IsNumber()
    matchMaxWatchers: number;
}