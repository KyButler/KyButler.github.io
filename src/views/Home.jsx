import React from 'react';
import { Button, Container, Col, Image, Jumbotron, Row } from 'react-bootstrap';

import LilyPFP from '../assets/images/LilyPFP.png';

const Home = () => {

  const buttons = [
    {
      title: 'Twitch (KyButler)',
      link: 'https://twitch.tv/KyButler',
      colorName: 'twitch'
    },
    {
      title: `Discord Server (KyButler's Discord)`,
      link: 'https://discordapp.com/invite/mgWCDbe',
      colorName: 'discord'
    },
    {
      title: 'YouTube Channel (KyButler)',
      link: 'https://www.youtube.com/c/kybutler',
      colorName: 'youtube',
    },
    {
      title: 'Twitter (LilyTheFoxgirl)',
      link: 'https://www.twitter.com/LilyTheFoxgirl',
      colorName: 'twitter',
    },
    {
      title: 'Twitter (kyranbutler)',
      link: 'https://www.twitter.com/kyranbutler',
      colorName: 'twitter',
    },
    {
      title: 'Instagram (LilyTheFoxgirl)',
      link: 'https://www.instagram.com/lilythefoxgirl/',
      colorName: 'instagram',
    },
    {
      title: 'Trello (to-do board)',
      link: 'https://trello.com/b/oG4w3rhH/twitchtv-kybutler',
      colorName: 'trello'
    }
  ]

  return (<>
    <Container >
      <Row>
        <Col xs={{ order: 'last' }} md={{ order: 'first' }} xs={12}>
          <Jumbotron>
            <h1>Hi, I'm <span className='kybutler-text'>KyButler!</span></h1>

            <p>
              . . . a university student who has too much time for videogames
              - hopefully you'll enjoy watching me play some as much as I like playing them!
            </p>
          </Jumbotron>
        </Col>
        <Col xs={{ order: 'first' }} md={{ order: 'last' }}>
          <Image src={LilyPFP} style={{ marginBottom: '1em', borderRadius: '5px' }} fluid />
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <h1>Links!</h1>
          <hr />
        </Col>
      </Row> */}

      {buttons.map((button, i) => (
        <Row>
          <Col>
            <div className="button-container">
              <Button
                onClick={() => (window.open(button.link), '_blank')}
                className={`mb-2 ${button.colorName}-color`}
                style={{ color: 'white', cursor: 'pointer', height: '3em' }}
                variant='dark'
                block >
                <center>
                  {button.title}
                </center>
              </Button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  </>


  )
}

export default Home;