import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/Card-Reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
        total_item: "",
        total_amount: "",
        shipping_fee: 50000,
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCard = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CARD", payload: { id, color, amount, product } });
    };
    return <CartContext.Provider value={{ ...state, addToCard }}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
    useContext(CartContext);
};

export { CartProvider, useCartContext };
