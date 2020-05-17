import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/index'
import mySaga from './saga/rootSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store


// store expects us to pass at least one reducer function.
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);
