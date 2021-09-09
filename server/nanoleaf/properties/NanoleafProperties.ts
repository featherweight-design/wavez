import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class NanoleafProperties {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  serialNo: string;

  @Field(() => String)
  firmwareVersion: string;

  @Field(() => String)
  model: string;
}

export default NanoleafProperties;
