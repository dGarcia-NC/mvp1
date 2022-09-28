import axios from "axios";

const NewsData = () => {
  axios
    .get(
      "https://newsapi.org/v2/everything?q=Bitcoin&from=2022-09-01&sortBy=popularity&apiKey=2470c35134b94d4391f6b0a195fab4a2"
    )
    .then((response) => {})
    .catch((error) => console.log(error));
};

export default NewsData;
