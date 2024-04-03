import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class StadiumModel {
    @Prop({ unique: true})
    stadiumId: number;

    @Prop({ required: true })
    stadiumTitle: string;

    @Prop({ required: true })
    stadiumLocation: string;

    @Prop({ required: true })
    matchMaxWatchers: number;
}

export const StadiumSchema = SchemaFactory.createForClass(StadiumModel)