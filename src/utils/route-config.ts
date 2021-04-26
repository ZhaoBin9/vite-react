import * as React from 'react'
import ReactRouter, { RouteComponentProps } from 'react-router-dom'
import history from 'history'

export interface RouteItem extends ReactRouter.RouteProps {
  name?: string;
  path: string;
  exart?:boolean;
  children?: RouteItem[];
  redirect?: history.LocationDescriptor;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  // render: (props?: RouteComponentProps<any>) => React.ReactNode;
}