import { Collection } from 'lib-collection';
import { CanvasType } from './canvas.type';

interface ICanvasOptions {
  width: number;
  height: number;
  background?: string;
  context?: CanvasType;
}

export class Colors {
  canvas;
  context;
  type;
  layout: Collection = new Collection();

  constructor(options: ICanvasOptions) {
    const {
      width,
      height,
      background = 'transparent',
      context = '2d',
    } = options;

    this.canvas = document.createElement('canvas');

    this.canvas.width = width;
    this.canvas.height = height;

    // this.canvas.style.width = width;
    // this.canvas.style.height = height;
    this.canvas.style.background = background;

    // Добавление канваса в тело документа
    document.body.appendChild(this.canvas);

    // Получение контекста рисования
    this.type = context;
    this.context = this.canvas.getContext(context);

    if (!this.context) {
      console.error('Canvas not set');
      return;
    }
  }

  get width(): number {
    return this.canvas.width;
  }
  set width(value: number) {
    this.canvas.width = value;
  }

  get height(): number {
    return this.canvas.height;
  }
  set height(value: number) {
    this.canvas.height = value;
  }

  get fill(): string {
    return this.canvas.style.background;
  }
  set fill(value: string) {
    this.canvas.style.background = value;
  }

  clear() {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height,
    );
  }

  draw() {
    this.layout.forEach((figure) => {
      figure.draw();
    });
  }
}
