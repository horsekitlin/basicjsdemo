import React from "react";
import AssginmentIndIcon from "@material-ui/icons/AssignmentInd";
import EditIcon from "@material-ui/icons/Edit";
import TuneIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import HomeContainer from "../screens/HomeScreen";
import ErrorPageContainer from "../screens/ErrorPageScreen";
import ElementContainer from "../screens/ElementScreen";

const routerConfig = [
  {
    id: 'defaultPage',
    icon: <AssginmentIndIcon />,
    title: '主目录',
    displayMenu: true,
    funName: 'SystemFunction',
    component: HomeContainer,
    path: '/'
  },
  {
    id: 'elements',
    icon: <AllInboxIcon />,
    title: '元件目录',
    displayMenu: true,
    funName: 'SystemFunction',
    component: ElementContainer,
    path: '/elements'
  },
  {
    id: 'sysSettings',
    displayMenu: true,
    title: '系统设置',
    icon: <SettingsIcon />,
    funName: 'settings',
    children: [
      {
        text: '帐号列表',
        funGroup: 'withChildPage',
        funName: 'withChildPage',
        component: ElementContainer,
        path: '/elements'
      },
    ]
  },
  {
    id: 'SysPage',
    displayMenu: false,
    funName: 'SystemFunction',
    children: [
      {
        text: '错误页面404',
        funGroup: 'SystemFunction',
        funName: 'SystemFunction',
        component: ErrorPageContainer,
        path: '*'
      }
    ]
  }
];

export default routerConfig;
