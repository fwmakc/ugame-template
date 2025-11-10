import { Rectangle } from './draw/primitives/rectangle.2d.primitive';

type CanvasContextType = '2d' | 'webgl' | 'webgl2' | 'webgpu';

interface ICanvasOptions {
  width: number;
  height: number;
  background?: string;
  context?: CanvasContextType;
}

export class Canvas {
  canvas;
  ctx;
  layer: Array<any> = [];

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
    this.ctx = this.canvas.getContext(context);

    if (!this.ctx) {
      console.error('Canvas not set');
      return;
    }

    /*
    // Рисуем квадрат
    ctx.fillStyle = 'blue'; // Установка цвета заливки
    ctx.fillRect(50, 50, 200, 150); // Рисуем квадрат с заданными координатами и размерами

    // Можно нарисовать что-то еще, например, круг
    ctx.fillStyle = 'red'; // Установка другого цвета заливки
    ctx.beginPath(); // Начало нового пути
    ctx.arc(300, 200, 50, 0, Math.PI * 2); // Создание круга с заданными координатами и радиусом
    ctx.fill(); // Заливка круга
    */
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.layer.forEach((figure) => {
      figure.draw();
    });
  }

  rectangle(options) {
    const rectangle = new Rectangle(this.ctx, options);
    rectangle.draw();
    this.layer.push(rectangle);
  }
}
