import css from './TransactionHistory.module.css';
export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
