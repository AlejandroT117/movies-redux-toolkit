import logo from "./logo.svg";
import "./App.css";
import { Search } from "./components/Search/Search";
import { Movie } from "./components/Movie/Movie";
//provider
import { Provider } from "react-redux";

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Search />
          <Movie />
        </header>
      </div>
    </Provider>
  );
}

export default App;
