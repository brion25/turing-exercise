import React from 'react'
import _isFunction from 'lodash/isFunction'
import _mapValues from 'lodash/mapValues'

import reducer, { initialState } from './reducer'

export const StateContext = React.createContext({})

export const Provider = ({children}) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  return props => {
    const { state, dispatch } = React.useContext(StateContext)

    let dispatchToProps = {}
    let stateToProps = {}

    if (_isFunction(mapDispatchToProps)) {
      dispatchToProps = mapDispatchToProps(dispatch)
    } else {
      dispatchToProps = _mapValues(mapDispatchToProps, action => action(dispatch, () => state))
    }

    if (_isFunction(mapStateToProps)) {
      stateToProps = mapStateToProps(state)
    }

    return (
      <Component
        {...stateToProps}
        {...dispatchToProps}
        {...props}
      />
    )
  }
}
