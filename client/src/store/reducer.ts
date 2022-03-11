interface UserState {
	identity: string;
}

interface DUMMY_ACTION {
	type: "DUMMY_ACTION";
}

interface SMARTY_ACTION {
	type: "SMARTY_ACTION";
}

const initialState: UserState = {
	identity: "",
};

type Action = DUMMY_ACTION | SMARTY_ACTION;

export const reducer = (
	state: UserState = initialState,
	action: Action
): UserState => {
	switch (action.type) {
		case "DUMMY_ACTION":
			return {
				...state,
			};
		case "SMARTY_ACTION":
			return {
				...state,
			};
		default:
			return state;
	}
};
