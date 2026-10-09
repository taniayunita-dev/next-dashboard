declare module '*.css';

declare module '*.module.css' {
  export  const classes: { readonly [key: string]: string };
}