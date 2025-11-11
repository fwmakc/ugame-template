import { CanvasType } from '../canvas/canvas.type';
import { Canvas } from '../canvas/canvas.class';
import { IRectangle, Rectangle } from '../primitives/2d/rectangle';
import { IRound, Round } from '../primitives/2d/round';

export class Library {
  context: CanvasRenderingContext2D;
  type: CanvasType;

  constructor(canvas: Canvas) {
    this.context = canvas.context;
    this.type = canvas.type;
  }

  rectangle(options: IRectangle) {
    return new Rectangle(this.context, options);
  }

  round(options: IRound) {
    return new Round(this.context, options);
  }
}
