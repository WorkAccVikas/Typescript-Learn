function throwError(message: string): never {
  throw new Error(message);
}

throwError('jay');

function infinite(): never {
  while (true) {}
}

export {};
