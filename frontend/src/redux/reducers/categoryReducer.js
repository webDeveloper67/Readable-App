import {GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAIL} from '../constants/categoryConstants'

export const categoryReducer = (state = {categories: []}, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      const {categories} = action.payload
      return {...state, categories}
    case GET_ALL_CATEGORIES_FAIL:
      return {...state, error: action.payload}
    default:
      return state;
  }
};
