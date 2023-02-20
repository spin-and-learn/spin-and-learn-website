import { Route, Switch } from 'react-router-dom'

// Views
import Home from './views/Home'


const Router = () => {
    return (
        <div className="Router">
            <Switch>
                <Route>
                    <Route exact path='/' component={Home} />
                </Route>
            </Switch>
        </div>
    )
}

export default Router
