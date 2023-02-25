import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getCurrentTime, 1000));

currentTime();

function currentTime() {
  if (!localStorage.getItem('videoplayer-current-time')) {
    return;
  }
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

function getCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}