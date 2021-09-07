import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class Palette {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  colors: string;
}

export default Palette;
