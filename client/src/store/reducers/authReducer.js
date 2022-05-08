import * as actionTypes from "../actions/actions";

const initialState = {
	userId: null,
	loggedIn: false,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.LOGIN_EXISTING_USER_SUCCESS:
			return {
				...state,
				loggedIn: true,
			};
		case actionTypes.LOGIN_EXISTING_USER_FAIL:
			return {
				...state,
				loggedIn: false,
			};
		case actionTypes.CREATE_NEW_USER:
		default:
			return state;
	}
};

export default authReducer;
