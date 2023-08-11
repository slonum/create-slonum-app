export interface IHeaderPopap {
  open: () => void;
  close: () => void;
  redirect: (link: string) => void;
}
