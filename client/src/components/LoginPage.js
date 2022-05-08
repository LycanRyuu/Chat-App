import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginPage.module.css";

function LoginPage() {
	return (
		<>
			<h1 className={styles.Login}>Login Page</h1>
			<Link href='/'>Home</Link>
		</>
	);
}

export default LoginPage;
