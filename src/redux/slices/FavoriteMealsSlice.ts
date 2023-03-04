import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type FavoriteMealsState = {
  favoriteIds: string[];
};

const initialState: FavoriteMealsState = {
  favoriteIds: [],
};

export const useFavoriteMealsSlice = createSlice({
  name: 'favoriteMeals',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favoriteIds.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favoriteIds = state.favoriteIds.filter(
        favoriteId => favoriteId !== action.payload,
      );
    },
  },
});

export default useFavoriteMealsSlice.reducer;
