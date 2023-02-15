import { Card } from "react-bootstrap";

const SingleMovie = ({ commentsToShow, movieToShow }) => {
  return (
    <Card>
      <Card.Img variant="top" src={movieToShow} />
      <Card.Body className="px-0">
        <Card.Title>{movieToShow.title}</Card.Title>
        <Card.Title>{commentsToShow.comment}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SingleMovie;
