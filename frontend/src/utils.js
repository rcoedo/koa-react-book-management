export const classNames = (...classes) => classes
  .filter(c => c !== '')
  .join(' ');
