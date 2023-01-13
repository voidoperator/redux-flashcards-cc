import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id: id,
        front: front,
        back: back
      };
    }
  }
});

export default cardsSlice.reducer;
export const { addCard } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards;
