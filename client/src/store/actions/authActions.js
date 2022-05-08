import * as actionTypes from "./actions";

export const loginExistingUser = (payload) => {
	return {
		type: actionTypes.LOGIN_EXISTING_USER,
		payload: payload,
	};
};

export const createNewUser = (payload) => {
	return {
		type: actionTypes.CREATE_NEW_USER,
		payload: payload,
	};
};
