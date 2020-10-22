import React from 'react';
import {FormControl as Form, 
	Grid, Paper, Typography,
	TextField, Button} from '@material-ui/core'
import classes from './Login.module.scss'

const input = [
	{
		id : "username",
		label : "Username",
		type: "email"
	},
	{
		id : "password",
		label : "Password",
		type: "password"
	}
]

const FormLogin = () => {
	return (
		<div className={classes.FormLogin}>
			<Typography variant="h3" style={{fontWeight: "500"}}>Selamat Datang</Typography>

			<Form
				fullWidth
				style={{marginTop: '2em'}}
			>

				{input.map((list) => (
					<TextField 
					key={list.id} 
					label={list.label} 
					type={list.type} 
					variant="filled"
					margin="normal"
					size="small"
					fullWidth />
				))}

				<Button 
				color="primary" 
				variant="contained"
				style={{marginTop: '2em'}}
				>Login</Button>
			
			</Form>
		</div>
	);
}

export default FormLogin;
