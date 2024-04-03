import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PlanModel {
    @Prop({ required: true })
    planId: string;

    @Prop({ required: true })
    planTitle: string;

    @Prop({ required: true })
    planPrice: number;
}

export enum PlanType {
    USER,
    TRAINER,
    ADMIN
}

export const PlanSchema = SchemaFactory.createForClass(PlanModel)