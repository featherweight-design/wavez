import { Field, InputType } from 'type-graphql';

@InputType()
class AuthenticateNewUserInput {
  @Field(() => String)
  ip: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  mac: string;
}

@InputType()
class NanoleafStateValueInput {
  @Field(() => String)
  value: string;

  @Field(() => String, { nullable: true })
  min?: string;

  @Field(() => String, { nullable: true })
  max?: string;
}

@InputType()
class NanoleafStateInput {
  @Field(() => NanoleafStateValueInput, { nullable: true })
  on?: NanoleafStateValueInput | null;

  @Field(() => NanoleafStateValueInput, { nullable: true })
  brightness?: NanoleafStateValueInput | null;

  @Field(() => NanoleafStateValueInput, { nullable: true })
  hue?: NanoleafStateValueInput | null;

  @Field(() => NanoleafStateValueInput, { nullable: true })
  sat?: NanoleafStateValueInput | null;

  @Field(() => NanoleafStateValueInput, { nullable: true })
  ct?: NanoleafStateValueInput | null;

  @Field(() => String, { nullable: true })
  colorMode?: string;
}

export {
  AuthenticateNewUserInput,
  NanoleafStateInput,
  NanoleafStateValueInput,
};
