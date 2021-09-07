import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class NanoleafAuthToken {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  token: string;
}

export default NanoleafAuthToken;
