import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Trello = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `KyButler's Site - Trello`;
  });

  return (<>
    {loading ? <center style={{marginTop: '1em'}}><Spinner animation="border" variant="light" /></center> : null}
    <iframe src="https://trello.com/b/oG4w3rhH.html" frameBorder="0" width="100%" height="100%" onLoad={() => setLoading(false)}></iframe>
  </>);
}

export default Trello;