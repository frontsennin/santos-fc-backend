import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TicketModel {
    @Prop({ unique: true})
    ticketId: number;

    @Prop({ required: true })
    ticketPrice: string;

    @Prop({ required: true })
    ticketSoldDate: Date;

    @Prop({ required: true })
    ticketChecageDate: Date;

    @Prop({ required: true })
    ticketUserId: string;

    @Prop({ required: true })
    ticketMatchId: string;

    @Prop({ required: true })
    ticketQrCode: string;

    @Prop({ required: true })
    ticketQrCodeInitTime: Date;

    @Prop({ required: true })
    ticketQrCodeFinishTime: Date;
}

export const TicketSchema = SchemaFactory.createForClass(TicketModel)