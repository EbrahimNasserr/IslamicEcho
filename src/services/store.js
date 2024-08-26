import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import prayerApi from './prayerTimeApi';
import { quranApi } from './quranApi';

const store = configureStore({
  reducer: {
    [prayerApi.reducerPath]: prayerApi.reducer,
    [quranApi.reducerPath]: quranApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prayerApi.middleware , quranApi.middleware),
});

setupListeners(store.dispatch);

export default store;
