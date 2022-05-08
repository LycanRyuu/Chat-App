import React, { useState } from "react";
import ChatList from "./ChatList";
import { TextField, Box, InputAdornment } from "@mui/material";
import Search from "@mui/icons-material/Search";
import styles from "../styles/LeftPane.module.css";

function LeftPane() {
	const [searchString, setSearchString] = useState("");
	// eventually userList will be fetched from redux
	const [userList] = useState([
		{ name: "Kurosaki Ichigo" },
		{ name: "Yagami Light" },
		{ name: "Lelouch Lamperouge" },
		{ name: "Hououin Kyouma" },
		{ name: "Edwardo Elric" },
		{ name: "Eren Yeagar" },
		{ name: "Gojou Satoru" },
		{ name: "Betelgeuse Romanee Conti" },
		{ name: "User" },
		{ name: "User 59832" },
	]);
	const listItems = userList.filter((item) => {
		return item.name.toLowerCase().includes(searchString.toLowerCase());
	});

	return (
		<Box className={styles.LeftPane}>
			<TextField
				placeholder='Search'
				// label='Search'
				variant='outlined'
				autoFocus
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<Search />
						</InputAdornment>
					),
				}}
				onChange={(e) => setSearchString(e.target.value)}
			/>
			{/* backgroundColor: "#333333", */}
			<div className={styles.ChatList}>
				{listItems &&
					listItems.map((item, i) => {
						return <ChatList key={i} name={item.name} />;
					})}
			</div>
		</Box>
	);
}

export default LeftPane;
