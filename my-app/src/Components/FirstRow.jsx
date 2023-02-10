import { Component } from "react";
import { Row, Col, Card, Spinner, Alert } from "react-bootstrap";

class FirstRow extends Component {
  state = {
    filmArray: [],
    loading: true,
    hasError: false,
    errorMessage: "",
  };
  fetchFilms = async () => {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?s=Matrix&apikey=2dffd2c7&type=movie"
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({
          filmArray: data.Search,
          loading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `ERRORE: ${response.status}`,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR: ${error.message}`,
      });
    }
  };
  componentDidMount = () => {
    console.log("SONO COMPONENT DID MOUNT!");
    this.fetchFilms();
  };
  render() {
    console.log("rendering");
    return (
      <div className="mx-3 overflow d-flex">
        {this.state.hasError && (
          <Alert variant="danger" className="text-center">
            {this.state.errorMessage}
          </Alert>
        )}
        {this.state.loading && (
          <div className="text-center m-auto">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <Row className="justify-content-center  mt-5 row-cols-3 flex-nowrap">
          {this.state.filmArray.map((Film) => (
            <>
              <Col
                key={Film.imdbID}
                className="d-flex justify-content-between col-2"
              >
                <Card>
                  <Card.Img variant="top" src={Film.Poster} />
                  <Card.Body>
                    <Card.Title>{Film.Title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </div>
    );
  }
}
export default FirstRow;
