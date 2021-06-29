import { HomePage } from "./pages/HomePage";
import { NewRoom } from "./pages/NewRoom";

import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from "./styles/global";
import { AuthContextProvider } from "./contexts/AuthContext";





function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={HomePage} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
