import { ObjectType, Field } from 'type-graphql';

// import { NanoleafStateValueProps } from 'server/types';

@ObjectType()
class NanoleafStateValue {
  @Field(() => String)
  value: string;

  @Field(() => String)
  min?: string;

  @Field(() => String)
  max?: string;
}

@ObjectType()
class NanoleafState {
  @Field(() => NanoleafStateValue, { nullable: true })
  on: NanoleafStateValue | null;

  @Field(() => NanoleafStateValue, { nullable: true })
  brightness: NanoleafStateValue | null;

  @Field(() => NanoleafStateValue, { nullable: true })
  hue: NanoleafStateValue | null;

  @Field(() => NanoleafStateValue, { nullable: true })
  sat: NanoleafStateValue | null;

  @Field(() => NanoleafStateValue, { nullable: true })
  ct: NanoleafStateValue | null;

  @Field(() => String, { nullable: true })
  colorMode?: string;
}

export { NanoleafState, NanoleafStateValue };
