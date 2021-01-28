import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';

const YouTube = () => {
    const [apiLoading, setApiLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [apiResponseError, setApiResponseError] = useState(false);

    // useEffect(() => {
    //     document.title = `KyButler's Site - YouTube`;
    //     setApiLoading(true);
    //     //   fetch('https://48i2npszs8.execute-api.us-west-1.amazonaws.com/youtube/')
    //     fetch('http://localhost:8000/youtube')
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setApiLoading(false);
    //                 setApiResponseError(false);
    //                 setApiResponse(result);
    //             },
    //             (error) => {
    //                 setApiLoading(false);
    //                 setApiResponseError(true);
    //                 console.log(error);
    //             }
    //         )
    // }, []);

    const getBody = () => {
        return (
            <Container fluid>
                <Card>
                    I don't even know what to put here?
                </Card>
            </Container>
        )
    }

    if (apiResponseError) {
        return <center style={{ marginTop: '1em' }}>There was an Error processing your request.</center>
    }
    else if (!apiLoading && apiResponse && !apiResponseError) {
        return getBody();
    }
    else {
        return <center style={{ marginTop: '1em' }}><Spinner animation="border" variant="light" /></center>
    }

}

export default YouTube;