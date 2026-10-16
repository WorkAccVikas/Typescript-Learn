// ✅ Avoid any[]. If the type isn't known yet, prefer unknown[] and narrow it before use.

const json = '[1, 2, 3]';
const data: unknown[] = JSON.parse(json);
