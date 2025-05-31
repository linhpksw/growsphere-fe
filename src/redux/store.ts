import { combineReducers } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import { wishlistSlice } from './slices/wishlistSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    Persistor,
} from 'redux-persist';
import { configureStore as configureStoreRTK } from '@reduxjs/toolkit';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// Fallback for non-browser environments
const createNoopStorage = () => ({
    getItem(_key: string) {
        return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
        return Promise.resolve(value);
    },
    removeItem(_key: string) {
        return Promise.resolve();
    },
});

// Use localStorage in browser, otherwise no-op
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStoreRTK({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppPersistor = Persistor;

export const persistor = persistStore(store);
export default store;
