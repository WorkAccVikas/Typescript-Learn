
// TOPIC : Call Signature + Properties

interface Logger {
  (message: string): void;
  level: 'info' | 'warning' | 'error';
}

const print: Logger = (message: string) => {
  // Reads state directly from print.level
  if (print.level === 'info') {
    console.log(message);
  }
};

// Initialize state directly on the function instance
print.level = 'info';

// Usage
print('System ready'); // Logs: System ready

print.level = 'error';
print('User logged in'); // Ignored (level is 'error', not 'info')

export {};

// https://share.gemini.google/W1c54pQ3WQFA