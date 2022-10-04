import Table from "react-bootstrap/Table";
import styles from "../styles/Table.module.css";
import axios from "axios";

const CryptoTable = ({ coins }) => {
  const handleClick = (index, coin) => {
    console.log(index, "clicked", coin);
    axios
      .post(`http://localhost:3001/${index}/${coin.name}/1`)
      .then((response) => {
        console.log("POST", response);
        axios.get("http://localhost:3001/").then((response) => {
          console.log("response:", response.data);
        });
      });
  };

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
          if (index < 10) {
            return (
              <tr key={index + 1} onClick={(e) => handleClick(index, coin)}>
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
          }
        })}
      </tbody>
    </Table>
  );
};

export default CryptoTable;
