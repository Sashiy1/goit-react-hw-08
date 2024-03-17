import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transactionTable}>
        <thead className={css.transactionHead}>
          <tr>
            <th className={css.transactionHeader}>Type</th>
            <th className={css.transactionHeader}>Amount</th>
            <th className={css.transactionHeader}>Currency</th>
          </tr>
        </thead>
  
        <tbody className={css.transactionData}>
          {items.map((item) => (
            <tr className={css.transactionPoint} key={item.id}>
              <td className={css.transactionItem}>{item.type}</td>
              <td className={css.transactionItem}>{item.amount}</td>
              <td className={css.transactionItem}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TransactionHistory;
  