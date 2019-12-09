import overOwnProperty from './overOwnProperty';

export default function aopForMethods(target, pattern) {
  let original = {};
  let prototype = target.prototype;
  while (prototype) {
    overOwnProperty({ target, pattern, original, object: prototype });

    prototype = Reflect.getPrototypeOf(prototype);
  }
}
