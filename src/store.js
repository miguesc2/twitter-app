import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { initialState } from './reducers/reducer';
import { getAll, watchPosts } from './services/urls';

export const store = createStore( reducer, initialState, composeWithDevTools() );

getAll().then(users => { store.dispatch({ type: 'usercreated', payload: users }) })
watchPosts().then(post => { store.dispatch({  type: 'seePosts', payload: post }) })
