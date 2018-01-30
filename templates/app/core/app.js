import React, { Component } from 'react'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    const { store, children } = this.props
    return(
      <Provider store={store}>{children}</Provider>
    )
  }
}

export default App