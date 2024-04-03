import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class MatchModel {
    @Prop({ unique: true})
    matchId: number;

    @Prop({ required: true })
    matchTitle: string;

    @Prop({ required: true })
    homeTeam: string;

    @Prop({ required: true })
    awayTeam: string;

    @Prop({ required: true })
    matchDate: Date;

    @Prop({ required: true })
    matchStadiumId: string;

    @Prop({ required: true })
    matchMaxWatchers: number;
}

export const MatchSchema = SchemaFactory.createForClass(MatchModel)