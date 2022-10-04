import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/Card.module.css";

const NewsCard = ({ news }) => {
  return (
    <Card className={styles.cardContainer}>
      <Card.Img variant="top" src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.description}</Card.Text>
        <Button variant="primary" href={news.url}>
          {news.source.name}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
