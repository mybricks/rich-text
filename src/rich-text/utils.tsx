export function uuid() {
  return Date.now().toString(36) + (Math.floor(Math.random() * 10000)).toString(36);
}