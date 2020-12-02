import React from "react";
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeContainer from "../screens/HomeScreen";
import ErrorPageContainer from "../screens/ErrorPageScreen";

const routerConfig = [
  {
    id: 'defaultPage',
    permissionId: 'default',
    permissionType: 'read',
    icon: <DashboardIcon />,
    title: '主目录',
    component: HomeContainer,
    path: '/'
  },
  {
    id: 'SysPage',
    permissionId: 'default',
    permissionType: 'read',
    hide: true,
    children: [
      {
        text: '错误页面404',
        funGroup: 'SystemFunction',
        component: ErrorPageContainer,
        path: '*'
      }
    ]
  }
];

export default routerConfig;
