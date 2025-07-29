/*
classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

Implement the classnames function.
Values can be mixed. Falsey values are to be ignored.

classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'
classNames('a', ['b', { c: true, d: false }]); // 'a b c'

*/

export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export default function classNames(...args: Array<ClassValue>): string {
  const classes: string[] = [];

  const process = (item: ClassValue): void => {
    if (!item) return; // skip falsy values like null, undefined, false, 0, ''

    if (typeof item === "string" || typeof item === "number") {
      classes.push(String(item));
    } else if (Array.isArray(item)) {
      item.forEach(process); // recursive flattening
    } else if (typeof item === "object") {
      for (const key in item) {
        if (Object.hasOwn(item, key) && item[key]) {
          classes.push(key);
        }
      }
    }
  };

  args.forEach(process);

  return classes.join(" ");
}
