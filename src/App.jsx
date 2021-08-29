import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './Pages/Main/Main';
import Menu from './Pages/Menu/Menu';
import Listar_todos from './Pages/Listar_todos/Listar_todos';
import Create from './Pages/Create/Create';
import Deleteall from './Pages/Deleteall/Deleteall';
import Info from './Pages/Info/Info';
import Delete from './Pages/Delete/Delete';
import Update from './Pages/Update/Update'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Main}></Route>
        <Route path='/menu' component={Menu}></Route>
        <Route path='/listar-todos' component={Listar_todos}></Route>
        <Route path='/create' component={Create}></Route>
        <Route path='/deleteall' component={Deleteall}></Route>
        <Route path='/info/:id' component={Info}></Route>
        <Route path='/delete/:id' component={Delete}></Route>
        <Route path='/update/:id' component={Update}></Route>
      </Switch>
    </BrowserRouter>
  );
}


