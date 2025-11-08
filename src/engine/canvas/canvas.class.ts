interface ICanvasOptions {
  width: number;
  height: number;
}

export class Canvas {
  constructor(options: ICanvasOptions) {
    // Создание элемента канвас
    const canvas = document.createElement('canvas');

    canvas.width = options.width;
    canvas.height = options.height;

    // Добавление канваса в тело документа
    document.body.appendChild(canvas);

    // Получение контекста рисования
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas not set');
      return;
    }

    // Рисуем квадрат
    ctx.fillStyle = 'blue'; // Установка цвета заливки
    ctx.fillRect(50, 50, 200, 150); // Рисуем квадрат с заданными координатами и размерами

    // Можно нарисовать что-то еще, например, круг
    ctx.fillStyle = 'red'; // Установка другого цвета заливки
    ctx.beginPath(); // Начало нового пути
    ctx.arc(300, 200, 50, 0, Math.PI * 2); // Создание круга с заданными координатами и радиусом
    ctx.fill(); // Заливка круга
  }
}
