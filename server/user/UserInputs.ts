import { Field, ID, InputType } from 'type-graphql';

import { RoleEnum } from 'server/types';
import { Role } from '.prisma/client';

@InputType()
class CreateUserInput {
  @Field(() => String)
  accessKey: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;
}

@InputType()
class UpdateUserInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => RoleEnum, { nullable: true })
  role?: Role;
}

@InputType()
class UpdateUserAdminInput {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => RoleEnum, { nullable: true })
  role?: Role;

  @Field(() => Number, { nullable: true })
  invites?: number;
}

export { CreateUserInput, UpdateUserInput, UpdateUserAdminInput };
