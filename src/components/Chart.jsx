import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import styles from "./Chart.module.css";

const Chart = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions.filter((t) => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

  const data = [{ name: 'Summary', Income: income, Expenses: expenses }];

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <p className={styles.title}>Monthly overview</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" />
            <YAxis stroke="rgba(255,255,255,0.4)" />
            <Tooltip contentStyle={{ background: '#302b63', border: 'none', borderRadius: '8px', color: '#fff' }} />
            <Legend />
            <Bar dataKey="Income" fill="#6c63ff" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Expenses" fill="#ef4444" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;