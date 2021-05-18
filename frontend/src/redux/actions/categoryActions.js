import axios from 'axios'
import {apiURL, headers} from '../api'
import {GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAIL} from '../constants/categoryConstants'

export const getAllCategories = () => async dispatch => {
  try {
    const {data} = await axios.get(`${apiURL}/categoriess`, {headers})

    dispatch({
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error.message, 'errorrrr')
    dispatch({
      type: GET_ALL_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}



