const cartReducer = (state = [], action) => {

  switch (action.type) {

    case "@cart/ADD":
      const { product } = action
      return [...state, product]

    case "@cart/REMOVE":
      const { id } = action
      const newList = state.filter((product) => product.id !== id)

      return newList

    default:
      return state
  }
}

export default cartReducer
