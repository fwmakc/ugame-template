import { sounds } from '../../../engine';
import { startService } from './start.service';
import { setSongService } from './set_song.service';
import { setSfxService } from './set_sfx.service';
import { isStartedService } from './is_started.service';

export function updateService(scene) {
  // spawn ball
  const isStarted = isStartedService();
  console.log('-- isStarted', isStarted);
  if (isStarted) {
    startService(scene);
  }

  sounds.onInit(() => {
    const sfx = setSfxService();
    sfx.play();
    // const song = setSongService();
    // song.play();
  });

  if (scene.actors.ball && scene.actors.ball.position.y < -1) {
    // destroy ball if it goes below the level
    scene.actors.ball.destroy();
    scene.actors.ball = undefined;

    // resetService();
    startService(scene);
  }
}
