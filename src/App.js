import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import './App.css';

function App() {
  const {tg, onToggleButton} = useTelegram()
  useEffect(() => {
    tg.ready()
  }, [])

  
  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'/form'} element={<Form />}/>
      </Routes>
      
    </div>
  );
}

export default App;
