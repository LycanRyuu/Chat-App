import * as actionTypes from "../actions/actions";

const initialState = {
	chats: null,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SEND_MESSAGE:
		case actionTypes.RECEIVE_MESSAGE:
		default:
			return state;
	}
};

export default authReducer;
