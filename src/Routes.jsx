import { Switch, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import NewContact from './pages/NewContact/NewContact'
import EditContact from './pages/EditContact/EditContact'

export default function Router(){
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
};
