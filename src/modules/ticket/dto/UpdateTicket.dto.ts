import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateTicketDto {
    @IsOptional()
    @IsNumber()
    ticketId: number;

    @IsOptional()
    @IsString()
    ticketPrice: string;

    @IsOptional()
    @IsDate()
    ticketSoldDate: Date;

    @IsOptional()
    @IsDate()
    ticketChecageDate: Date;

    @IsOptional()
    @IsString()
    ticketUserId: string;

    @IsOptional()
    @IsString()
    ticketMatchId: string;

    @IsOptional()
    @IsString()
    ticketQrCode: string;

    @IsOptional()
    @IsDate()
    ticketQrCodeInitTime: Date;

    @IsOptional()
    @IsDate()
    ticketQrCodeFinishTime: Date;
}