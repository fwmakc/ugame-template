import { actors, vectors } from '../../../engine';
import { Brick } from '../../../actors/brick.actor';
import { Paddle } from '../../../actors/paddle.actor';
import { Wall } from '../../../actors/wall.actor';
import { GameState } from '../../../states/game.state';

export function resetService(scene) {
  // reset game objects
  actors.destroy();
  GameState.score = 0;

  const { size } = scene;

  // spawn bricks
  const pos = vectors.vector();
  for (pos.x = 4; pos.x <= size.x - 4; pos.x += 2) {
    for (pos.y = 12; pos.y <= size.y - 2; pos.y += 1) {
      new Brick(pos, scene);
    }
  }

  // create walls
  new Wall(vectors.vector(-0.5, size.y / 2), vectors.vector(1, 100), scene); // top
  new Wall(
    vectors.vector(size.x + 0.5, size.y / 2),
    vectors.vector(1, 100),
    scene,
  ); // left
  new Wall(
    vectors.vector(size.x / 2, size.y + 0.5),
    vectors.vector(100, 1),
    scene,
  ); // right

  // spawn player paddle
  scene.actors.paddle = new Paddle(vectors.vector(size.x / 2 - 12, 1), scene);

  // reset ball
  scene.actors.ball = undefined;
}
