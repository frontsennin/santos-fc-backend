import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
    @IsNotEmpty()
    @IsNumber()
    ticketId: number;

    @IsNotEmpty()
    @IsString()
    ticketPrice: string;

    @IsNotEmpty()
    @IsDate()
    ticketSoldDate: Date;

    @IsNotEmpty()
    @IsDate()
    ticketChecageDate: Date;

    @IsNotEmpty()
    @IsString()
    ticketUserId: string;

    @IsNotEmpty()
    @IsString()
    ticketMatchId: string;

    @IsNotEmpty()
    @IsString()
    ticketQrCode: string;

    @IsNotEmpty()
    @IsDate()
    ticketQrCodeInitTime: Date;

    @IsNotEmpty()
    @IsDate()
    ticketQrCodeFinishTime: Date;
}