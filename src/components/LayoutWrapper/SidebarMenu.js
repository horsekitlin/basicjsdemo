import React from 'react';
import { List } from '@material-ui/core';
import SidebarMenuItem from './SidebarMenuItem';
import routerConfig from '../../constants/router.config';

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null
    };
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <List>
        {routerConfig.map((menuItem, index) => {
          const { id, menuHided, children = [], icon, path, title } = menuItem;
          return menuHided ? null : (
            <SidebarMenuItem
              id={id}
              key={`${id}-${index}`}
              path={path}
              items={children}
              parentIcon={icon}
              parentText={title}
              {...this.props}
            />
          );
        })}
      </List>
    );
  }
}

export default SidebarMenu;
