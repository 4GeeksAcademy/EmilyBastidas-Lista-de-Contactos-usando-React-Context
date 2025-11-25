export const initialStore = {
  contacts: []
}

export const storeReducer = (state, action) => {

  if (action.type === "SET_CONTACT") {
    return { ...state, contacts: action.payload }
  }

  if (action.type === "ADD_CONTACT") {
    return { ...state, contacts: [...state.contacts, action.payload] }
  }

  if (action.type === "DELETE_CONTACT") {
    const contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    )
    return { ...state, contacts }
  }

  return state
}

