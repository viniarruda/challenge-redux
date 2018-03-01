import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Home from '../../components/home/home'
import Contact from '../../components/contact'

export default props => (
    <Router>
        <div className="site">
            <Switch>
                <Route path="/contato" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </Router>

)
