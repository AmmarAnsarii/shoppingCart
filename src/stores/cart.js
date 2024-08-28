import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab : false
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const {productId, quantity} = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId)
            if(indexProductId>=0){
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({productId, quantity});
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
            
        },
        changeQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            return {
                ...state,
                items: state.items.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: quantity > 0 ? quantity : undefined }
                        : item
                ).filter(item => item.quantity !== undefined)
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatus: (state) => {
            if(state.statusTab === false){
                state.statusTab = true
            }
            else{
                state.statusTab = false
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        }
    }
})

export const {addToCart, changeQuantity, toggleStatus} = cartSlice.actions;
export default cartSlice.reducer;