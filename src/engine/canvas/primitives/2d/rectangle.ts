import { IPrimitive, Primitive } from '../primitive.class';

export interface IRectangle extends IPrimitive {
  width: number;
  height: number;
}

export class Rectangle extends Primitive<IRectangle> {
  declare width;
  declare height;

  draw() {
    if (!this.context) {
      return;
    }

    this.context.fillStyle = this.fill || 'transparent';
    this.context.fillRect(this.x, this.y, this.width, this.height);

    if (this.borderWidth && this.borderWidth > 0) {
      if (this.borderColor) {
        this.context.strokeStyle = this.borderColor;
      }
      this.context.lineWidth = this.borderWidth;
      this.context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
}
