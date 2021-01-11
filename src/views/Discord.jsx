import React, { useEffect } from 'react';
import { Button, Container, Col, Jumbotron, Row } from 'react-bootstrap';

const Discord = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Discord`;
  });

  const buttons = [{
    title: 'Discord Server',
    link: 'https://discordapp.com/invite/mgWCDbe',
    colorName: 'discord'
  },]

  return (
    <Container style={{marginTop: '1em'}}>
      <Row>
        <Col xs={{ order: 'first' }} md={{ order: 'first' }} xs={12}>

          <Jumbotron>
            <h1>Join the <a href='https://discord.com/invite/mgWCDbe' className='discord-text'>Discord!</a></h1>

            <p>
              . . . where we talk about anything and everything! It's a community full of
              extremely friendly and wholesome people - all looking to have a great time!
            </p>
          </Jumbotron>
          {buttons.map((button, i) => (
            <div className="button-container" key={i}>
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
          ))}
        </Col>
        <Col xs={{ order: 'last' }} md={{ order: 'last' }}>
          <iframe src="https://ptb.discord.com/widget?id=571371327177621504&theme=dark" width="100%" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </Col>
      </Row>
    </Container>);
}

export default Discord;