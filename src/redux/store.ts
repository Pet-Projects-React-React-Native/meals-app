import {combineReducers, configureStore} from '@reduxjs/toolkit';
import favoriteMealsSlice from './slices/FavoriteMealsSlice';
export const rootReducer = combineReducers({
  favoriteMealsSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
