import { createStore } from "redux"

function reducer() {
  return [1,2,3,4,5,6]
}

const store = createStore(reducer)

export default store