import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';


export default createStore(
	reducers,
	applyMiddleware(thunk, logger)
)
