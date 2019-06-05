import { combineReducers } from 'redux'

const uuid = require('uuid/v1');
// uuid();
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export default rootReducer

function authorsReducer(state=[], action) {
  let idx
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author]

    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id)
      return [...state.slice(0, idx), ...state.slice(idx +1)]

    case "ADD_BOOK":
      let existingAuthor = state.filter(author => author.authorName === action.book.authorName)
      console.log(existingAuthor)
      if (existingAuthor.length > 0) {
        return state
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid()}]
      }
    
    default:
      return state
  }
}

function booksReducer(state=[], action) {
  let idx
  switch (action.type) {
    case "ADD_BOOK":
    console.log (action.book)
      return [...state, action.book]

    case "REMOVE_BOOK":
      idx = state.indexOf(action.id)
      return [...state.slice(0, idx), ...state.slice(idx +1)]
    
    default:
      return state
  }
}