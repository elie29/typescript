export function pad(s: string, len: number, pad: string) {
  s = s + '';
  var spaces = len + 1 - s.length;
  return s + Array(spaces).join(pad);
}
