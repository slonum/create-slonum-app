declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_NODE: 'production' | 'development';
    readonly NODE_ENV: 'production' | 'development';
    readonly NEXT_PUBLIC_URL: string;
    readonly NEXT_PUBLIC_FRONT: string;
    readonly NEXT_PUBLIC_LOCAL: string;
  }
}
