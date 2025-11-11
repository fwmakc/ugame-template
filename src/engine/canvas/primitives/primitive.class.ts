export interface IPrimitive {
  x: number;
  y: number;
  fill?: string;
  borderColor?: string;
  borderWidth?: number;
}

export abstract class Primitive<T extends IPrimitive> {
  x = 0;
  y = 0;
  fill = 'transparent';
  borderColor = 'transparent';
  borderWidth = 0;

  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D, options: T) {
    this.context = context;

    Object.entries(options)?.forEach(([key, value]) => {
      if (!value) {
        return;
      }
      this[key] = value;
    });
  }

  abstract draw(): void;
}
