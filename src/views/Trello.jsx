import React, {useState} from 'react';
import { Spinner } from 'react-bootstrap';

const Trello = () => {
  const [loading, setLoading] = useState(true);

  return (<>
    {loading ? <center><Spinner animation="border" variant="light" /></center> : null}
    <iframe src="https://trello.com/b/oG4w3rhH.html" frameBorder="0" width="100%" height="1000px" onLoad={() => setLoading(false)}></iframe>
  </>);
}

export default Trello;