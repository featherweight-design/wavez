import { DeviceType } from '@prisma/client';
import { Field, InputType } from 'type-graphql';

import { DeviceEnum } from 'types';

@InputType()
class CreatePaletteInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  colors: string;
}

@InputType()
class SetPaletteByDeviceIdInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  deviceId: string;
}

@InputType()
class SetPaletteByDeviceType {
  @Field(() => String)
  id: string;

  @Field(() => DeviceEnum)
  type: DeviceType;
}

@InputType()
class UpdatePaletteColorsInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  newColors: string;

  @Field(() => Boolean)
  shouldUpdateDevices?: boolean;
}

@InputType()
class UpdatePaletteNameInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  newName: string;

  @Field(() => Boolean)
  shouldUpdateDevices?: boolean;
}

export {
  CreatePaletteInput,
  SetPaletteByDeviceIdInput,
  SetPaletteByDeviceType,
  UpdatePaletteColorsInput,
  UpdatePaletteNameInput,
};
