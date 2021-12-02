import React, { useEffect } from 'react';
import { Button, Card, Container, Col, Image, Nav, Navbar as BSNavbar, Row, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ScrollReveal from 'scrollreveal'


import Johann710Banner from '../assets/images/VRChat_1920x1080_2020-04-05_13-18-23.897.png';
import LilyPFP from '../assets/images/LilyPFP.png';
import LilyBanner from '../assets/images/VRChat_1920x1080_2020-11-11_19-48-16.201.png';
import SourBanner from '../assets/images/VRChat_1920x1080_2020-11-11_22-56-07.930.png';


const HomeNew = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Home`;

    ScrollReveal().reveal('.sr', { delay: 100 })
  });

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
    },
    {
      title: 'Tiktok',
      link: 'https://www.tiktok.com/@kybutler_?',
      colorName: 'tiktok'
    }
  ]

  return (<>
    <Container className="sr">
      <Row>
        <Col className="mt-4" xs={{ order: 'last' }} md={{ order: 'first' }} md={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>
                <p className="h1"> 
                  Hi, I'm 
                  <span className="kybutler-text"> KyButler! </span>
                </p>
              </Card.Title>
              <Card.Text>
                . . . a full-time software developer with a passion for playing videogames, 
                hopefully you'll enjoy watching me play some as much as I enjoy playing them!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4" xs={{ order: 'first' }} md={{ order: 'last' }}>
          <Image className="shadow" fluid src={LilyPFP} rounded/>
        </Col>
      </Row>
    </Container>

    <Container className="sr">
      {buttons.map((button, i) => (
        <Button className={`mt-4 shadow sr ${button.colorName}-color`}
        key={ button.title }
        onClick={() => window.open(button.link, '_blank')} 
        size={"lg"} 
        style={{color: 'white', width: "100%"}}
        variant="outline-dark">
          { button.title }
        </Button>
      ))}
    </Container>

    <Container className="sr">
      <hr className="mt-4"/>
    </Container>

    <Container className="sr">
      <Row>
        <Col className="mt-4" xs={{ order: 'last' }} md={{ order: 'first' }} md={6} xs={12}>
          <iframe className="shadow" style={{ border: 0, width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2833081214/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://thesourknights.bandcamp.com/track/the-kybutler-collective">The KyButler Collective by The Sour Knights</a></iframe>
        </Col>
        <Col className="mt-4" xs={{ order: 'first' }} md={{ order: 'last' }}>
          <Card className="shadow">
              <Card.Body>
                <Card.Title>
                  <p className="h1"> 
                    The
                    <span className="kybutler-text"> KyButler </span>
                    Collective
                  </p>
                </Card.Title>
                <Card.Text>
                This is a track created by <span className="sour-text">The Sour Knights</span> dedicated to, well . . . me! I love this 
                song and I love the work that <span className="sour-text">Sour</span> puts into his music, definitely worth checking out!
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>

    <Container className="sr">
      <hr className="mt-4"/>
    </Container>

    <Container className="sr">
      <Row>
        <Col className="mt-4" xs={{ order: 'first' }} md={{ order: 'last' }} md={6} xs={12}>
          <iframe className="shadow" src="https://discord.com/widget?id=571371327177621504&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </Col>
        <Col className="mt-4" xs={{ order: 'last' }} md={{ order: 'first' }}>
          <Card className="shadow">
              <Card.Body>
                <Card.Title>
                  <p className="h1"> 
                    The
                    <span className="discord-text"> Discord </span>
                    Server
                  </p>
                </Card.Title>
                <Card.Text>
                  We have a community Discord server with over 500 people in it! Stop by, say hi, and have a great time meeting people, sharing memes, and more!
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>

    <Container className="sr">
      <hr className="mt-4"/>
    </Container>

    <Container className="sr">
      <Row>
        <Col className="mt-4">
          <Card className="shadow">
              <Card.Body>
                <Card.Title>
                  <p className="h1"> 
                    So what are you waiting for?
                  </p>
                </Card.Title>
                <Card.Text>
                  Follow some of my socials, join up on my streams, say hi in the Discord, and most importantly, enjoy your time as part of the KyButler community!

                  I look forward to meeting you! 

                  - KyButler
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>

    <Container className="sr">
      <hr className="mt-4"/>
    </Container>
  </>
  )
}

export default HomeNew;