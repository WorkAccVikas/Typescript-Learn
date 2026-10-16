// TOPIC: Template Literal
type CSSValue = number | `${number}px` | `${number}em`;

function setStyle(value: CSSValue) {}

setStyle(10); // ✅
setStyle('10px'); // ✅
setStyle('10em'); // ✅

setStyle(true); // ❌
setStyle('10rem'); // ❌

type Size = 'small' | 'medium' | 'large';
type Color = 'red' | 'green' | 'blue';

type Style = `${Size}-${Color}`;

function printColor(color: Style) {
  console.log(color);
}

printColor('small-blue');
printColor('small-blue1');

export {};
