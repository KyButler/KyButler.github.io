import React, {useEffect} from 'react';

const Trello = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Trello`;
  });

  return <iframe src="https://trello.com/b/oG4w3rhH.html" frameBorder="0" width="100%" height="100%"></iframe>;
};

export default Trello;
