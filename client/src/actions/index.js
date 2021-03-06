import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_STREAM, 
  FETCH_STREAMS, 
  FETCH_STREAM, 
  DELETE_STREAM, 
  EDIT_STREAM } from './types';
import streams from '../api/streams';
import history from '../history';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId}); // waits for creating stream
  dispatch({ type: CREATE_STREAM, payload: response.data }); // enters info
  history.push('/');  // goes to homepage after publishing (only if api is running)
}; 

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  // .put() only places values into new object that are desired, drops everything else
  const response = await streams.patch(`/streams/${id}`, formValues); // replace .put() with .patch() (only changes a few things)
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.get(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};