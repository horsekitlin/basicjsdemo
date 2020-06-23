import React from "react";
import AssginmentIndIcon from "@material-ui/icons/AssignmentInd";
import EditIcon from "@material-ui/icons/Edit";
import TuneIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import HomeContainer from "../screens/HomeScreen";
import ErrorPageContainer from "../screens/ErrorPageScreen";

const routerConfig = [
  {
    id: 'defaultPage',
    icon: <AssginmentIndIcon />,
    title: '儀表板',
    displayMenu: true,
    funName: 'SystemFunction',
    component: HomeContainer,
    path: '/'
  },
  {
    id: 'SysPage',
    displayMenu: false,
    funName: 'SystemFunction',
    children: [
      {
        text: '错误页面404',
        level: 0,
        funGroup: 'SystemFunction',
        funName: 'SystemFunction',
        component: ErrorPageContainer,
        path: '*'
      }
    ]
  }
];

export default routerConfig;
