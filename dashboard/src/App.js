import { Switch, Route, Redirect } from "react-router-dom"

// Components
import Main from "./components/layout/Main"

// Screenss
import Students from "./screens/Students"
import Tables from "./screens/Dashboard"
import FormsScreen from "./screens/Forms"
import Employees from "./screens/Employees"
import CreateStudent from "./screens/CreateStudent"
import Profile from "./components/employes/Profile"


const App = () => {
    console.log(process.env);
    return (
        <div className="App">
            <Switch>
                {/* <Main> */}
                    {/* <Route exact path="/students" component={Students} /> */}
                    <Route exact path="/" component={CreateStudent} />
                    {/* <Route exact path="/forms" component={FormsScreen} />
                    <Route exact path="/" component={Tables} />
                    <Route exact path="/employees" component={Employees} />
                    <Route exact path="/employee/:employeeId" component={Profile} /> */}
                    <Redirect from="*" to="/" />
                {/* </Main> */}
            </Switch>
        </div>
    )
}

export default App