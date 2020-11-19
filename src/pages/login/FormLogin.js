import React, { useState } from "react";
import {
  FormControl as Form,
  Typography, Snackbar,
  TextField, CircularProgress,
  Button, Grid
} from "@material-ui/core";
import {Alert} from '@material-ui/lab'
import classes from "./Login.module.scss";
import { useHistory } from "react-router-dom";
import { login, isLogin, logout } from "./../../utils/auth";
import { api } from "./../../utils/api";
import { logo, typeLogo } from "./../../assets";

const FormLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
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
    setDisabled(true);
    api
      .post("auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        login(res.data);
        console.log(isLogin());
        return api.post("auth/me");
      })
      .then((res) => {
        // TODO: Save ID User
        if (res.data.data.user.role !== "lecturer") {
          logout()
          console.log("youre not lecturer")
          throw new Error(res)
        }
        localStorage.setItem('name', res.data.data.user.name)
        localStorage.setItem("id", res.data.data.user.id);
        localStorage.setItem("photo", res.data.data.user.photo);
        history.push("/");
      })
      .catch((err) => {
        console.warn(err);
        setDisabled(false)
        setOpen(true)
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
          disabled={disabled}
        >
          {!disabled ? "Login" : <CircularProgress size={30} />}
        </Button>
      </Form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity="error">
          Cek kembali email dan password anda
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FormLogin;
