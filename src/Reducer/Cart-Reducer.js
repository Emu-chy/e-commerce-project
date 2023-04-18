const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        // console.log(product);
        let existingProduct = state.cart.find((curItem) => curItem.id === id + color);

        if (existingProduct) {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === id + color) {
                    let newAmount = curElem.amount + amount;

                    if (newAmount >= curElem.max) {
                        newAmount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount: newAmount,
                    };
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            };
        } else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };
        }
    }

    if (action.type === "SET_INCREMENT") {
        let incrementItem = state.cart.map((curItem) => {
            if (curItem.id === action.payload) {
                let incAmount = curItem.amount + 1;
                return {
                    ...curItem,
                    amount: incAmount,
                };
            } else {
                return curItem;
            }
        });
        return { ...state, cart: incrementItem };
    }

    if (action.type === "SET_DECREMENT") {
        let decrementItem = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let decAmount = curElem.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1;
                }
                return {
                    ...curElem,
                    amount: decAmount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: decrementItem };
    }

    if (action.type === "CART_TOTAL_ITEM") {
        let updateCartIcon = state.cart.reduce((initialValue, curItem) => {
            let { amount } = curItem;
            initialValue = initialValue + amount;
            return initialValue;
        }, 0);
        return { ...state, total_item: updateCartIcon };
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((initialValue, curTotal) => {
            let { price, amount } = curTotal;
            initialValue = initialValue + price * amount;
            return initialValue;
        }, 0);
        return {
            ...state,
            total_price,
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }
    return state;
};

export default CartReducer;
