import React from 'react';
import useSound from 'use-sound';

import soundMP3 from './assets/sounds/out_of_death.mp3';

const SoundTrack = (props) => {

const [play] = useSound(soundMP3);

   play();

    return (<div></div>);
}

export default SoundTrack;