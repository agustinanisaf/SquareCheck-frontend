import React, { useState } from "react";
import {
  FormControl as Form,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import classes from "./Login.module.scss";
import { useHistory } from "react-router-dom";
import { login } from './../../utils/auth'
import Cookie from 'js-cookie'

const FormLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const input = [
    {
      id: "email",
      label: "Email",
      type: "email",
      onChange: (e) => setEmail(e.target.value),
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      onChange: (e) => setPassword(e.target.value),
    },
  ];

	const submit = (e) => {
		e.preventDefault();
		const data = {
			user: email,
			token: password
		}
		login(data)
		console.log(Cookie.get('user'))
    history.push("/");
  };

  return (
    <div className={classes.FormLogin}>
      <Typography variant="h3" style={{ fontWeight: "500" }}>
        Selamat
        <br /> Datang
      </Typography>

      <Form fullWidth style={{ marginTop: "2em" }}>
        {input.map((list) => (
          <TextField
            key={list.id}
            label={list.label}
            type={list.type}
            variant="filled"
            margin="normal"
            size="small"
            onChange={list.onChange}
            InputLabelProps={{ style: { color: "#999999" } }}
            fullWidth
          />
        ))}

        <Button
          color="primary"
          variant="contained"
				  style={{ marginTop: "2em" }}
				  onClick={submit}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
