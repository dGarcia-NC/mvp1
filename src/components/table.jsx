import Table from "react-bootstrap/Table";
import styles from "../styles/Table.module.css";

const CryptoTable = ({ coins }) => {
  return (
    <Table size="lg" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Icon</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => {
          return (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>
                {" "}
                <img
                  className={styles.tableStyles}
                  src={coin.image}
                  alt={coin.name}
                />
              </td>
              <td>{coin.id}</td>
              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CryptoTable;
