import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero section/Hero';
import { store } from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
     <Header />
     <Hero/>
    </Provider>
  );
}

export default App;
