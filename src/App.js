import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";



function App() {
  return (
<BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/addAdmin">
          <AddAdmin />
        </Route>
        <Route path="/addBlog">
          <AddBlog />
        </Route>
        <Route path="/manageBlog">
          <ManageBlog />
        </Route>
        <Route path="/blog/:id">
          <SingleBlog />
        </Route> */}
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
