import React, { useMemo, forwardRef } from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Link, useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "./../../utils/auth";
import Cookie from "js-cookie";
import { api } from "./../../utils/api";

export default function ListItemLink(props) {
  const { primary, to, icon } = props;
  const location = useLocation();
  const history = useHistory();

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  );

  const logoutClick = (e) => {
    api
      .post('auth/logout')
      .then((res) => {
        console.log(res);
        logout();
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        selected={to === location.pathname}
        onClick={primary === "Logout" ? logoutClick : null}
      >
        {icon && <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>}
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
