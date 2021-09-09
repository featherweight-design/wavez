import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class AccessKey {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  key: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  userId: string;
}

export default AccessKey;
