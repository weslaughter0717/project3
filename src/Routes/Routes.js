import React from 'react';
import { browserHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import Container from '../Components/Container';
import App from '../App';
import Custom from '../Components/Custom';
import Talk from '../Components/Talk'

const Routes = props => {
    return (
        <Router history={browserHistory}>
        <Route path="/" component={Container}>
        <IndexRoute component={App} />
        <Route path="/custom" component={Custom} />
        <Route path='/talk' component={Talk} />
        </Route>
    
        
        <Route path="*">
        <IndexRedirect to="/" />
        </Route>
        </Router>
    )
}
export default Routes;