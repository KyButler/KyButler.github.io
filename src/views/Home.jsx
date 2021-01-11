import React, { useEffect } from 'react';
import { Button, Card, Container, Col, Image, Jumbotron, ResponsiveEmbed, Row } from 'react-bootstrap';

import BillyBanner from '../assets/images/VRChat_1920x1080_2020-02-28_20-33-40.552.png';
import Johann710Banner from '../assets/images/VRChat_1920x1080_2020-04-05_13-18-23.897.png';
import LilyPFP from '../assets/images/LilyPFP.png';
import LilyBanner from '../assets/images/VRChat_1920x1080_2020-11-11_19-48-16.201.png';
import SourBanner from '../assets/images/VRChat_1920x1080_2020-11-11_22-56-07.930.png';

const Home = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Home`;
  });

  const onClickButton = (link, name) => {
    window.open(link, '_blank');
  }

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
    <Container style={{ marginBottom: '3em' }}>
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
                onClick={() => onClickButton(button.link, button.colorName)}
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

    <Container style={{ marginBottom: '3em' }}>
      <hr />
      <Row>
        <Col xs={{ order: 'last' }} md={{ order: 'first' }} xs={12}>
          <ResponsiveEmbed aspectRatio='1by1'>
            <iframe style={{ border: 0, width: '100%', height: '100%', borderRadius: '5px' }} src="https://bandcamp.com/EmbeddedPlayer/track=2833081214/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/" seamless><a href="https://thesourknights.bandcamp.com/track/the-kybutler-collective">The KyButler Collective by The Sour Knights</a></iframe>
          </ResponsiveEmbed>
        </Col>
        <Col xs={{ order: 'first' }} md={{ order: 'last' }}>
          <Jumbotron>
            <h1>The <span className='kybutler-text'>KyButler</span>  Collective</h1>
            <hr />
            <p>This is a track created by <span className='sour-text' onClick={() => window.open('https://www.youtube.com/channel/UC1YhDvjc50ax8D_RlwdLB6Q', '_blank')}>The Sour Knights</span> dedicated to, well . . . me!
              I love this song and I love the work that Sour puts into his music, definitely worth checking out!</p>
          </Jumbotron>
        </Col>

      </Row>
    </Container>

    <Container style={{ marginBottom: '10em' }}>
      <hr />
      <Row>
        <Col>
          <Image className='image-on-hover' onClick={() => window.open('https://www.twitch.tv/andynya', '_blank')} style={{ borderRadius: '5px', marginBottom: '1em' }} src={LilyBanner} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className='image-on-hover' onClick={() => window.open('https://www.twitch.tv/conanbutler', '_blank')} style={{ borderRadius: '5px', marginBottom: '1em' }} src={BillyBanner} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className='image-on-hover' onClick={() => window.open('https://www.twitch.tv/j0hann710', '_blank')} style={{ borderRadius: '5px', marginBottom: '1em' }} src={Johann710Banner} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className='image-on-hover' onClick={() => window.open('https://www.youtube.com/channel/UC1YhDvjc50ax8D_RlwdLB6Q', '_blank')} style={{ borderRadius: '5px', marginBottom: '1em' }} src={SourBanner} fluid />
        </Col>
      </Row>
    </Container>
  </>


  )
}

export default Home;