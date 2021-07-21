import './App.css';
import CakeContainer from './components/CakeContainer'; 
// provide this store to react app
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
