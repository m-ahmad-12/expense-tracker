import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "./TransactionList.module.css";

const TransactionList = () => {
  const { transactions, dispatch } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <p className={styles.title}>Recent transactions</p>
        {transactions.length === 0 ? (
          <p className={styles.empty}>No transactions yet — add one above.</p>
        ) : (
          transactions.map((t) => (
            <div key={t.id} className={styles.item}>
              <span className={styles.description}>{t.description}</span>
              <div className={styles.right}>
                <span className={t.type === 'income' ? styles.income : styles.expense}>
                  {t.type === 'income' ? '+' : '-'}${t.amount}
                </span>
                <button
                  className={styles.deleteBtn}
                  onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: t.id })}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList;