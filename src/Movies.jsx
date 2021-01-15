import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, Spinner } from "react-bootstrap";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_reviews: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=94Ib5kpQ6xKNnxurFbxhXJaXKf3hhLrK"
    )
      .then((res) => res.json())
      .then((movies) => {
        console.log(movies);
        this.setState({ movie_reviews: movies.results });
        console.log(this.state.movie_reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container fluid="md" style={{ display: "block" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "courier",
          }}
        >
          New York Times Movie Reviews
        </h1>
        <br />
        <div className="col-md-12">
          {this.state.movie_reviews.map((movie) => (
            <Row style={{ textAlign: "center" }}>
              <Col style={{ margin: "10px 0px", alignItems: "center" }}>
                <Card border="primary">
                  <Card.Header>
                    <h3 style={{ fontFamily: "arial" }}>
                      {movie.display_title}
                    </h3>
                  </Card.Header>
                  <Card.Title style={{ marginTop: "8px" }}>
                    ({movie.byline})
                  </Card.Title>
                  <Card.Body>
                    <Card.Title>
                      <h4 style={{ fontWeight: "500" }}>{movie.headline}</h4>
                    </Card.Title>
                    <Card.Text>{movie.summary_short}</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>
                      Date: {movie.date_updated}
                    </Card.Text>
                    <Button variant="primary">
                      <a
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          marginBottom: "20px",
                        }}
                        target="_blank"
                        href={movie.link.url}
                      >
                        Watch
                      </a>
                    </Button>
                    <br />
                  </Card.Body>
                  <br />
                </Card>
                <br />
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    );
  }
}

export default Movies;
