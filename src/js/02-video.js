import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function getCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(getCurrentTime, 1000));


