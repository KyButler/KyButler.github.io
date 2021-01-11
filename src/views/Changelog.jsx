import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

import changelog from '../assets/changelog.json';

const Changelog = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Changelog`;
  });

  const getEntries = () => {
    return changelog.changelog.map((change, i) => (
      <Container key={i} style={{ marginBottom: '1em' }}>
        <Card bg='light'>
          <Card.Header>
            <Card.Title>
              {change.change[0].date}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {change.change[0].changed && change.change[0].changed.length > 0 ? 
          <ul>
            {change.change[0].changed.map((change, i) => (
              <li key={i}>{change}</li>
            ))}
          </ul>
        : 'No changes.'}
          </Card.Body>
        </Card>
      </Container>
    ))
  }

  return (
    <div style={{marginTop: '1em'}}>
      {getEntries()}
    </div>
  );
}

export default Changelog;