import { DeviceType } from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';
import { DeviceEnum } from 'types';

@ObjectType()
class WifiDevice {
  @Field(() => String)
  ip: string;

  @Field(() => String)
  mac: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
class Device extends WifiDevice {
  @Field(() => ID)
  id: string;

  @Field(() => DeviceEnum)
  type: DeviceType;

  @Field(() => String)
  userId: string;
}

export { Device, WifiDevice };
