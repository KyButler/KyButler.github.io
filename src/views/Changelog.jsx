import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

import changelog from '../assets/changelog.json';

const Changelog = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Changelog`;
    window.gtag('config', 'G-H3Q4RMNZNV', { 'page_title': document.title, page_path: window.location.pathname + window.location.search });
  });

  const logs = [
    {
      'date': '11/9/2020',
      'changed': [
        `'First Commit'`,
        'Added Twitch Page',
        'Added Changelog Page',
        `Added wip text to the '/' route`,
        'Changed routing method to hashrouter',
        'Added badly formatted Twitch embed',
        'Added WIP warning',
        'Added scuffed Discord invite link',
        'Cleaned up formatting a bit on Home',
        'Added Discord Page',
        'Changed background color to pink',
        'Added scuffed Trello (need to fix 100% height)',
        'Added Loading Spinner',
        'Added Navbar dropdown for small screens'
      ]
    },
    {
      'date': '11/11/2020',
      'changed': [
        'Added analytics'
      ]
    },
    {
      'date': '11/13/2020',
      'changed': [
        'Added some images to bottom of home page with links',
        'Added favicon (sub tail)',
        'Removed loading icon on Twitch page, it was causing jank movement on player load',
        'Added The KyButler Collective on the home screen'
      ]
    }
  ]

  const getEntries = () => {
    return logs.map((item, i) => (
      <Container style={{ marginBottom: '1em' }}>
        <Card bg='light'>
          <Card.Header>
            <Card.Title>
              {item.date}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {item.changed && item.changed.length > 0 ? 
          <ul>
            {item.changed.map((change, i) => (
              <li>{change}</li>
            ))}
          </ul>
        : null}
          </Card.Body>
        </Card>
      </Container>
    ))
  }

  return (
    <>
      {getEntries()}
    </>
  );
}

export default Changelog;