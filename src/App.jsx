import GlobalProvider from './context/GlobalContext';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Chart from './components/Chart';

const App = () => {
  return (
     <GlobalProvider>
  <Navbar/>
  <Summary/>
  <AddTransaction/>
  <TransactionList/>
  <Chart/>
     </GlobalProvider>
  )
}

export default App
