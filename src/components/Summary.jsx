import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "./Summary.module.css";

const Summary = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((total, t) => total + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((total, t) => total + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.label}>Balance</p>
        <p className={styles.balance}>${balance}</p>
      </div>
      <div className={styles.card}>
        <p className={styles.label}>Income</p>
        <p className={styles.income}>${income}</p>
      </div>
      <div className={styles.card}>
        <p className={styles.label}>Expenses</p>
        <p className={styles.expense}>${expenses}</p>
      </div>
    </div>
  );
};

export default Summary;