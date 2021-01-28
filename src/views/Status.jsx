import React, { useEffect, useState } from 'react';
import { Alert, Container, Jumbotron } from 'react-bootstrap';

const Status = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [apiResponseError, setApiResponseError] = useState(false);

  useEffect(() => {
    document.title = `KyButler's Site - API Status`;
    setApiLoading(true);
    // fetch('https://48i2npszs8.execute-api.us-west-1.amazonaws.com/status/')
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(
        (result) => {
          setApiLoading(false);
          setApiResponseError(false);
          setApiResponse(result);
        },
        (error) => {
          setApiLoading(false);
          setApiResponseError(true);
          console.log(error);
        }
      )
  }, []);

  return (
    <>
      <Container style={{ marginTop: '1em' }}>
        <Jumbotron>
          <center>
            {apiLoading ? <Alert variant='warning'>API Loading</Alert> : null}
            {apiResponseError ? <Alert variant='danger'>API ERROR</Alert> : null}
            {apiResponse ? <Alert variant='success'>API Success!</Alert> : null}
          </center>
        </Jumbotron>
      </Container>
    </>
  );

}

export default Status;