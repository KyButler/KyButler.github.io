import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { TwitchEmbed } from 'react-twitch-embed';

const Twitch = () => {
  const [loading, setLoading] = useState(true);

  return (<>
    {loading ? <center><Spinner animation="border" variant="light" /></center> : null}
    <TwitchEmbed
      channel="KyButler"
      id="KyButler"
      theme="dark"
      width='100%'
      height='1000px'
      onVideoReady={() => setLoading(false)}
    />
  </>
  );

}

export default Twitch;