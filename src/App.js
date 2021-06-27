import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import AllUsers from './Pages/AllUsers.js';
import Posts from './Pages/Posts.js';
import Profile from './Pages/Profile.js';



function App() {
  return (
<BrowserRouter>
      <Navbar />
      <Switch>
         <Route exact path="/">
            <Posts />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/allUsers">
          <AllUsers />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
