import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Product-context";
import reducer from "../Reducer/FilterProductReducer";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const initialState = {
        filter_products: [],
        all_products: [],
        grid_view: true,
        filters: {
            text: "",
        },
    };
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" });
    };
    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    };

    const sorting = (e) => {
        const sortedValue = e.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: sortedValue });
    };

    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
