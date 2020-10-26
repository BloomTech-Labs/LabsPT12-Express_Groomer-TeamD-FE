import { START } from '../actions/actions';

const initialState = {
  data: '',
};

export default (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case START:
      return {
        ...state,
      };
    default:
      return state;
  }
};
