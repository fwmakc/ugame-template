import { ShapeType } from '../enums/shape_type.enum';

export function getShape(
  value: number | undefined | null,
): keyof typeof ShapeType {
  value = Number(value) || 0;

  const keys = Object.keys(ShapeType);

  const key = keys.find(
    (key) => ShapeType[key as keyof typeof ShapeType] === value,
  );

  return (key as keyof typeof ShapeType) || keys[keys.length / 2];
}
