import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const findItemIndex = (items, id) => items.findIndex((item) => item.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const index = findItemIndex(state.items, product.id);

      if (index >= 0) {
        state.items[index].quantity += 1;
        return;
      }

      state.items.push({ ...product, quantity: 1 });
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, delta } = action.payload;
      const index = findItemIndex(state.items, id);

      if (index < 0) {
        return;
      }

      const nextQuantity = state.items[index].quantity + delta;

      if (nextQuantity <= 0) {
        state.items.splice(index, 1);
        return;
      }

      state.items[index].quantity = nextQuantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

