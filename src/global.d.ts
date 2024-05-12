/// <reference types="vite/client" />

type X = {
  className?: string;
  children?: ReactNode;
};

declare namespace JSX {
  type IntrinsicElements = Record<string, any>;
}
