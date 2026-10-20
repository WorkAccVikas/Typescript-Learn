// TOPIC : useUnknownInCatchVariables

try {
  throw new Error('Request failed');
} catch (error) {
  // ❌ Error: error is unknown
  console.log(error.message);
}

try {
  throw new Error('Request failed');
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('An unexpected error occurred');
  }
}
export {};
