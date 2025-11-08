import { IVector } from '../../vectors';
import { ITile } from '../../tiles';
import { IColor } from '../../colors';
import { Scene } from '../../system';

export interface IActor {
  scene: Scene;
  position: IVector;
  size: IVector;
  tiles?: ITile;
  angle?: number;
  color?: IColor;
  order?: number;
}
