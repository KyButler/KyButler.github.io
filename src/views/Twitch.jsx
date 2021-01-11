import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
// import { TwitchEmbed } from 'react-twitch-embed';

const Twitch = () => {

  useEffect(() => {
    document.title = `KyButler's Site - Twitch`;
    window.gtag('config', 'G-H3Q4RMNZNV', { 'page_title': document.title, page_path: window.location.pathname + window.location.search });
  });

  return (<>
    {/* <TwitchEmbed
      channel="KyButler"
      id="KyButler"
      theme="dark"
      width='100%'
      height='1000px'
    /> */}
  </>
  );

}

export default Twitch;