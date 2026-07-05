import { createContext, useReducer, useEffect } from "react";
import useLocalStorage from "../useLocalStorage";

export const GlobalContext = createContext();

function reducer(state, action) {
  if (action.type === 'ADD_TRANSACTION') {
    return [...state, action.payload];
  } else if (action.type === 'DELETE_TRANSACTION') {
    return state.filter((item) => item.id !== action.payload);
  }
  return state;
}

const GlobalProvider = ({ children }) => {
  const [storedTransactions, setStoredTransactions] = useLocalStorage('transactions', []);
  const [transactions, dispatch] = useReducer(reducer, storedTransactions);

  useEffect(() => {
    setStoredTransactions(transactions);
  }, [transactions]);

  return (
    <GlobalContext.Provider value={{ transactions, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;