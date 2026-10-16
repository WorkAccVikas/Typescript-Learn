function log(val: unknown) {
  if (typeof val === 'number') {
    console.log(val.toFixed(2));
  } else {
    console.log(val.toUpperCase());
  }
}

export {};
