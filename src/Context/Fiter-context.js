import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Product-context";
import reducer from "../Reducer/FilterProductReducer";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const initialState = {
        filter_products: [],
        all_products: [],
    };
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
    }, [products]);
    return <FilterContext.Provider value={{ ...state }}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
