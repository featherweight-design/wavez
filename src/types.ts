import { ReactNode } from 'react';

//* Global
export interface CurrentlyViewing {
  path: string;
  title: string;
  subTitle?: string;
  backPath?: string;
}

//* NavigationContainer
export interface NavigationContainerProps {
  children?: ReactNode;
}
