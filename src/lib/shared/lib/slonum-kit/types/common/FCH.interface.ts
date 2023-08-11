import { FC, PropsWithChildren } from 'react';

type FCClass<P = unknown> = P & PropsWithChildren & { className?: string };

export type FCC<T = unknown> = FC<PropsWithChildren<T>>;
export type FCL<T = unknown> = FC<FCClass<T>>;
