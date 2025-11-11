const color = (r: number, g: number, b: number, a = 1) => {
  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  return {
    r: clamp(r, 0, 255),
    g: clamp(g, 0, 255),
    b: clamp(b, 0, 255),
    a: clamp(a, 0, 1),
  };
};

export class Color {
  private r: number;
  private g: number;
  private b: number;
  private a: number;

  constructor(r: number, g: number, b: number, a = 1) {
    const clamp = (value: number, min: number, max: number): number =>
      Math.min(Math.max(value, min), max);

    this.r = clamp(r, 0, 255);
    this.g = clamp(g, 0, 255);
    this.b = clamp(b, 0, 255);
    this.a = clamp(a, 0, 1);
  }

  toHex(): string {
    const toHexComponent = (c: number): string =>
      Math.round(c).toString(16).padStart(2, '0');

    return `#${toHexComponent(this.r)}${toHexComponent(this.g)}${toHexComponent(
      this.b,
    )}`;
  }

  // Convert RGB to HSL
  toHSL(): string {
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number, s: number;
    const l: number = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
      l * 100,
    )}%)`;
  }

  // Convert HEX to RGB
  static fromHex(hex: string): Color {
    const bigint = parseInt(hex.replace(/^#/, ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return new Color(r, g, b);
  }

  // Convert HSL to RGB
  static fromHSL(h: number, s: number, l: number): Color {
    let r: number, g: number, b: number;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const hue = h / 360;

      r = hue2rgb(p, q, hue + 1 / 3);
      g = hue2rgb(p, q, hue);
      b = hue2rgb(p, q, hue - 1 / 3);
    }

    return new Color(
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255),
    );
  }

  // Get the RGBA string representation
  toRGBA(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
}

// Пример использования
const color1 = new Color(255, 0, 0); // Создать цвет RGB
console.log(color1.toHex()); // Output: #ff0000
console.log(color1.toHSL()); // Output: hsl(0, 100%, 50%)
console.log(color1.toRGBA()); // Output: rgba(255, 0, 0, 1)

const color2 = Color.fromHex('#00ff00'); // Создать цвет из HEX
console.log(color2.toRGBA()); // Output: rgba(0, 255, 0, 1)

const color3 = Color.fromHSL(240, 1, 0.5); // Создать цвет из HSL
console.log(color3.toHex()); // Output: #0000ff
