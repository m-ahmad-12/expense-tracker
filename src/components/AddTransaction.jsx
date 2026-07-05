import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "./AddTransaction.module.css";

const AddTransaction = () => {
  const { dispatch } = useContext(GlobalContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  function handleSubmit() {
    if (!description || !amount) return;
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: { id: Date.now(), description, amount: parseFloat(amount), type }
    });
    setDescription('');
    setAmount('');
    setType('income');
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <p className={styles.title}>Add transaction</p>
        <div className={styles.row}>
          <input className={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
          <input className={styles.input} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" />
          <select className={styles.select} value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button className={styles.btn} onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;