import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

// import Routes
import Home from '../routes/Home'
import GetStarted from '../routes/GetStarted'
import Error from '../routes/Error'

export default props => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="get-started" component={GetStarted} />
      <Redirect from="*" to="/error" component={Error} />
    </Switch>
  </Router>
)