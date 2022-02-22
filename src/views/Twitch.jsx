import React, {useEffect} from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

const Twitch = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Twitch`;
  });

  return (
    <div style={{backgroundColor: 'black', height: '100%', width: '100%'}}>
      <ReactTwitchEmbedVideo channel="KyButler" height="100%" width="100%" />
    </div>
  );
};

export default Twitch;
