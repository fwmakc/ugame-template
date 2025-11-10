interface IRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  borderColor?: string;
  borderWidth?: number;
}

export class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  borderColor?: string;
  borderWidth?: number;

  ctx?: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D, options: IRectangle) {
    this.ctx = ctx;
    const {
      x,
      y,
      width,
      height,
      fill = 'transparent',
      borderColor = 'transparent',
      borderWidth = 0,
    } = options;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
  }

  draw() {
    if (!this.ctx) {
      return;
    }

    this.ctx.fillStyle = this.fill || 'transparent';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    if (this.borderWidth && this.borderWidth > 0) {
      if (this.borderColor) {
        this.ctx.strokeStyle = this.borderColor;
      }
      this.ctx.lineWidth = this.borderWidth;
      this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
}
