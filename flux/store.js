import Store from './flux'
import reducer from './reducer'

// Define initial store state
const initialState = {
  data: []
}

// initialize store
const store = new Store(reducer, initialState)
export default store