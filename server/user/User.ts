import { Role } from '@prisma/client';
import { ObjectType, Field, ID } from 'type-graphql';

import { RoleEnum } from 'server/types';

@ObjectType()
class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => RoleEnum)
  role: Role;

  @Field(() => Number)
  invites: number;
}

@ObjectType()
class SignInResponse {
  @Field(() => User)
  user: User;

  @Field(() => String)
  token: string;
}

export { SignInResponse, User };
