import { createContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
        case "LOGOUT":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const intialState = {
    user: null
};

const Context = createContext({});

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
