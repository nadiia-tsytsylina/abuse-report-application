import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedTokenReducer = persistReducer(
  tokenPersistConfig,
  tokenSlice.reducer
);

export const {setToken} = tokenSlice.actions