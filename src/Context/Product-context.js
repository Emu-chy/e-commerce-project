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
        isSingleLoading: false,
        singleProduct: {},
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getPorducts = async () => {
        const url = "https://api.pujakaitem.com/api/products";
        dispatch({ type: "SET_LOADING" });
        try {
            const { data } = await axios.get(url);
            dispatch({ type: "SET_API_DATA", payload: data });
        } catch (err) {
            dispatch({ type: "API_ERROR" });
        }
    };

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };
    useEffect(() => {
        getPorducts();
    }, []);

    return (
        <>
            <Appcontext.Provider value={{ ...state, getSingleProduct }}>
                {children}
            </Appcontext.Provider>
        </>
    );
};

// custom hooks

const useProductContext = () => {
    return useContext(Appcontext);
};

export { AppProvider, Appcontext, useProductContext };
