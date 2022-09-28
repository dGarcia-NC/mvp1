import { useState, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HistoricalContext } from "../context/historical.context";

const NavigationBar = () => {
  const { setCoin, setCoinData } = useContext(HistoricalContext);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    if (search !== "") {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URI}coins/${search}/market_chart?vs_currency=usd&days=1`
        )
        .then((response) => {
          setCoin(search);
          setCoinData(response.data);
          setSearch("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Crypto Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="primary" onClick={handleClick}>
              Search
            </Button>{" "}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
