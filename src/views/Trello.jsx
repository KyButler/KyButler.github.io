import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Trello = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `KyButler's Site - Trello`;
    window.gtag('config', 'G-H3Q4RMNZNV', { 'page_title': document.title, page_path: window.location.pathname + window.location.search });
  });

  return (<>
    {loading ? <center><Spinner animation="border" variant="light" /></center> : null}
    <iframe src="https://trello.com/b/oG4w3rhH.html" frameBorder="0" width="100%" height="1000px" onLoad={() => setLoading(false)}></iframe>
  </>);
}

export default Trello;