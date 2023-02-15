import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const MovieDetails = () => {
  const [comments, setComments] = useState([]);
  const [movie, setMovie] = useState([]);
  useEffect(
    () => {
      fetchComments(
        "https://striveschool-api.herokuapp.com/api/comments/" + movie.imdbID
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          {
            headers: {
              "Content-type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhM2UyZDVmZTk4NDAwMTM0ZDNkNzAiLCJpYXQiOjE2NzYyOTU3MjYsImV4cCI6MTY3NzUwNTMyNn0.1Ac80W2IOfCSGSH6_IYlwsK5lu1ivQsPLMrlpeCp7jI",
            },
          }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        console.log(comments);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(
    () => {
      fetchMovie();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const fetchMovie = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?s=Matrix&apikey=2dffd2c7&type=movie"
      );
      console.log(response);
      if (response.ok) {
        let movie = await response.json();
        setMovie(movie);
        console.log(movie);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <SingleMovie commentsToShow={comments} movieToShow={movie} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
