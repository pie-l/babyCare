import * as TYPES from '../actions/types';

const initialState = {
  role: '',
  babyDetails: {},
  docId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_ROLE:
      return {...state, role: action.data};

    case TYPES.SET_BABY_DETAILS:
      return {...state, babyDetails: action.data};

    case TYPES.SET_DOC_ID:
      return {...state, docId: action.data};

    default:
      return state;
  }
};
