import { HomePage } from "./pages/HomePage";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";


import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from "./styles/global";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AdminRoom } from "./pages/AdminRoom";





function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />

        </Switch>
      </AuthContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
