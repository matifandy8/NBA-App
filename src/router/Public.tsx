import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";



export const Public = () => {

    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      </BrowserRouter>

    )
}