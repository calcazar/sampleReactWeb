import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { createStore } from 'redux'
import reducers from "./reducers"


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer
  );

  let persistor = persistStore(store);

  export {
    store,
    persistor,
  };