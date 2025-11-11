import { IPrimitive, Primitive } from '../primitive.class';

export interface IRound extends IPrimitive {
  radius: number;
}

export class Round extends Primitive<IRound> {
  declare radius;

  draw() {
    if (!this.context) {
      return;
    }

    this.context.fillStyle = this.fill || 'transparent';

    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.fill();

    if (this.borderWidth && this.borderWidth > 0) {
      if (this.borderColor) {
        this.context.strokeStyle = this.borderColor;
      }
      this.context.lineWidth = this.borderWidth;
      // this.context.strokeArc(this.x, this.y, this.width, this.height);
    }
  }
}
