import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedTokenReducer } from './tokenSlice';
import reportApi from './reportsApi';

export const store = configureStore({
  reducer: {
    token: persistedTokenReducer,
    [reportApi.reducerPath]: reportApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([reportApi.middleware]),
});

export const persistor = persistStore(store);
