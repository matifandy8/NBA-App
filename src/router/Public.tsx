import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Players from "../pages/Players";
import Register from "../pages/Register";
import Teams from "../pages/Teams";





export const Public: React.FC = () => {
    return(
      <Layout>       
         <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
      </Layout>
    )
}