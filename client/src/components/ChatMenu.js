import React from "react";
import LeftPane from "./LeftPane";
import Messages from "./Messages";
import styles from "../styles/ChatMenu.module.css";
import { Box } from "@mui/material";

function ChatMenu() {
	return (
		<Box className={styles.ChatMenu}>
			<LeftPane />
			<Messages />
		</Box>
	);
}

export default ChatMenu;
