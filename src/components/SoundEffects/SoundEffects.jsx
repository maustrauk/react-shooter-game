import React from 'react';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import collisionMP3 from '../../assets/sounds/collisionSound.mp3';

const SoundEffects = (props) => {
    return (<div>
        <Sound url={collisionMP3} playStatus={(props.destrEffect <= 100) ? Sound.status.PLAYING : Sound.status.STOPPED} />
    </div>);
};

SoundEffects.propTypes = {
    destrEffect: PropTypes.number.isRequired,
  };

export default SoundEffects;