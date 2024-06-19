import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class User {
  @Prop() first_name: string;
  @Prop() last_name: string;
  @Prop({ unique: true, required: true }) email: string;
  @Prop({ required: true }) password: string;
  @Prop({ default: 'foto.png' }) avatar: string;
  @Prop({ default: "user" }) role: string;
}

const UserSchema = SchemaFactory.createForClass(User);

type UserDocument = HydratedDocument<User>;

export { UserSchema, UserDocument };
