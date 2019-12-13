import { AsyncStorage } from 'react-native'
import { firestore } from '../firebase/firebase'
import { ADD_ITEMS, AUTH, HYDRATE, REMOVE_USER } from '../constants/Action'

function saveToLocalStorage(state) {
  AsyncStorage.setItem("STATE", JSON.stringify(state))
}

export default function reducer(state, action) {
  let newState = {}

  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.props
      }
    case AUTH:
      newState = {
        ...state,
        user: action.props
      }
      break;
    case REMOVE_USER:
      newState = {
        ...state
      }
      delete newState.user
      break;
    case ADD_ITEMS:
      newState = {
        ...state,
        data: action.props
      }
      break;
    default:
      newState = state
      break;
  }

  // we're after the switch statement
  // newState is already updated here
  saveToLocalStorage(newState)

  return newState
}