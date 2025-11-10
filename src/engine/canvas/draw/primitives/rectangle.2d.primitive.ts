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
  // x: number;
  // y: number;
  // width: number;
  // height: number;
  // fill?: string;

  ctx?: CanvasRenderingContext2D;
  previous: IRectangle;
  options: IRectangle;

  get x() {
    return this.options.x;
  }
  set x(value) {
    this.previous.x = this.options.x;
    this.options.x = value;
    this.draw();
  }

  get y() {
    return this.options.y;
  }
  set y(value) {
    this.previous.y = this.options.y;
    this.options.y = value;
    this.draw();
  }

  get width() {
    return this.options.width;
  }
  set width(value) {
    this.previous.width = this.options.width;
    this.options.width = value;
    this.draw();
  }

  get height() {
    return this.options.height;
  }
  set height(value) {
    this.previous.height = this.options.height;
    this.options.height = value;
    this.draw();
  }

  get fill() {
    return this.options.fill;
  }
  set fill(value) {
    this.previous.fill = this.options.fill;
    this.options.fill = value;
    this.draw();
  }

  get borderColor() {
    return this.options.borderColor;
  }
  set borderColor(value) {
    this.previous.borderColor = this.options.borderColor;
    this.options.borderColor = value;
    this.draw();
  }

  get borderWidth() {
    return this.options.borderWidth;
  }
  set borderWidth(value) {
    this.previous.borderWidth = this.options.borderWidth;
    this.options.borderWidth = value;
    this.draw();
  }

  constructor(ctx: CanvasRenderingContext2D, options: IRectangle) {
    this.ctx = ctx;
    this.options = { ...options };
    this.previous = { ...options };

    // const { x, y, width, height, fill = 'transparent' } = options;
    // this.x = x;
    // this.y = y;
    // this.width = width;
    // this.height = height;
    // this.fill = fill;
  }

  draw() {
    if (!this.ctx) {
      return;
    }
    // this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    console.log('-- this.previous', this.previous);
    console.log('-- this.options', this.options);
    this.ctx.clearRect(
      this.previous.x,
      this.previous.y,
      this.previous.width,
      this.previous.height,
    );

    this.ctx.fillStyle = this.fill || 'transparent';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    if (this.options.borderWidth && this.options.borderWidth > 0) {
      if (this.options.borderColor) {
        this.ctx.strokeStyle = this.options.borderColor;
      }
      this.ctx.lineWidth = this.options.borderWidth;
      this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    this.previous = { ...this.options };
  }
}
