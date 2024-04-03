import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PlanModel } from "./plan.model";

@Schema()
class UserModel {
    @Prop({ unique: true})
    userId: number;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    cpf: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    profilePicture: string;

    @Prop({ required: true })
    captiveChair: string;

    @Prop({ required: true })
    membershipDate: Date;

    @Prop({ required: true })
    status: UserStatus;

    @Prop({ required: true })
    plan: PlanModel;
}

enum UserStatus {
    ACTIVE,
    PENDING_PAYMENT,
    DELETED,
    DISABLED
}

const UserSchema = SchemaFactory.createForClass(UserModel)

export {
    UserModel,
    UserSchema,
    UserStatus
}