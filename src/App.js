import './App.css';
import CakeContainer from './components/CakeContainer'; 
// provide this store to react app
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
