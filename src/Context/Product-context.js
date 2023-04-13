import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const Appcontext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        isLoding: false,
        isError: false,
        products: [],
        featureProducts: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const url = " https://api.pujakaitem.com/api/products";
    const getPorducts = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const { data } = await axios.get(url);
            dispatch({ type: "SET_API_DATA", payload: data });
        } catch (err) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => {
        getPorducts();
    }, []);

    return (
        <>
            <Appcontext.Provider value={{ ...state }}>{children}</Appcontext.Provider>
        </>
    );
};

// custom hooks

const useProductContext = () => {
    return useContext(Appcontext);
};

export { AppProvider, Appcontext, useProductContext };
