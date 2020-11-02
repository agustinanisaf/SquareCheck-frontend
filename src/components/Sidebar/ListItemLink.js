import React, {useMemo, forwardRef} from 'react'
import {ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from "prop-types";

export default function ListItemLink(props) {
  const { primary, to, icon } = props;
  const location = useLocation();

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        selected={to === location.pathname}
      >
        {icon && <ListItemIcon style={{color: "white"}}>{icon}</ListItemIcon>}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

ListItemLink.defaultProps = {
  selected: false,
};
