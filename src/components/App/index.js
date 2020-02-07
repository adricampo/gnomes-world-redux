// REACT 
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// REDUX
import store from '../../redux/store'
import { Provider } from 'react-redux'

// COMPONENTS
import Landing from '../Landing'
import Search from '../Search'
import Results from '../Results'
import Detail from '../Detail'
import './index.sass'

function App() {
    return (
        <Router>
            <Provider store={ store }>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/landing' component={Landing} />
                        <Route path='/search' component={Results}>
                            <Search />
                            <Results />
                        </Route>
                        <Route exact path= '/detail/:id' render={({ match: { params: { id } } }) => <Detail id={id} />} />
                    </Switch>
            </Provider>
        </Router>
    )
}

export default App

