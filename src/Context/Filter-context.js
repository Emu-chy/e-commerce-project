import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Product-context";
import reducer from "../Reducer/FilterProductReducer";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const initialState = {
        filter_products: [],
        all_products: [],
        grid_view: true,
    };
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" });
    };
    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    };

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
