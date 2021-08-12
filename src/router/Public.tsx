import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";





export const Public: React.FC = () => {
    return(
      <Layout>       
         <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
      </Layout>
    )
}