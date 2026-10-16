// TOPIC: Discriminated Unions

type Square = { kind: 'square'; size: number };
type Rectangle = { kind: 'rectangle'; width: number; height: number };
type Circle = { kind: 'circle'; radius: number };

// type Shape = Square | Circle;
type Shape = Square | Circle | Rectangle;

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'circle':
      return Math.PI * s.radius ** 2;
    case 'rectangle':
      return s.height * s.width;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}

export {};
