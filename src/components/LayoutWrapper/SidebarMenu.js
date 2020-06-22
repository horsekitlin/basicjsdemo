import React from 'react';
import { List } from '@material-ui/core';
import SidebarMenuItem from './SidebarMenuItem';
import routerConfig from '../../constants/router.config';

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null,
    };
  }

  
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <List>
        {routerConfig.map(menuItem => {
          const { id, displayMenu, children = [], icon, title} = menuItem
        return (
         displayMenu
         ? <SidebarMenuItem
            key={id}
            id={id}
            items={children}
            parentIcon={icon}
            parentText={title}
            {...this.props} />
          : null
          )})}
      </List>
    );
  }
}

export default SidebarMenu;