import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const url = 'http://localhost:3000/moves';

  const [moves, setMoves] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    mount: '',
    type: 'ingreso'
  });
  const [balance, setBalance] = useState({
    total: 0,
    ingresos: 0,
    gastos: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
      .then(res => res.json())
      .then(data => setMoves(data))
    }

    fetchData();
  }, []);

  useEffect(() => {
    getBalance();
  }, [moves]);

  const getBalance = () => {
    let total = 0;
    let ingresos = 0;
    let gastos = 0;

    moves.map(item => {
      if(item.type === 'ingreso') {
        total += parseFloat(item.mount);
        ingresos += parseFloat(item.mount);
      } else {
        total -= parseFloat(item.mount);
        gastos += parseFloat(item.mount);
      }
    });

    setBalance({
      total,
      ingresos,
      gastos
    });
  }

  const createMove = () => {
    axios.post(url, formData)
    .then(response => {
      console.log('Respuesta del servidor:', response.data);
    })
    .then(() => {
      setMoves([...moves, {
        ...formData,
        id: moves.length + 1
      }]);
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  }



  return(
    <AppContext.Provider value={{
      moves,
      setMoves,
      formData,
      setFormData,
      createMove,
      balance
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
}