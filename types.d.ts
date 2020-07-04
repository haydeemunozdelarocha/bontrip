
declare module '*.png'
declare module '*.jpg'

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module 'react-dnd';
declare module 'react-date-range';
declare module 'react-dnd-html5-backend';
