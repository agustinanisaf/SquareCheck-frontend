import React, { useState, useEffect } from "react";
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
import axios from 'axios'

const FormLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  useEffect(() => {
    console.log(email)
  }, [email]);

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
    history.push("/home");
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
            required
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
