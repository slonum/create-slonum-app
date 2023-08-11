export namespace IFiles {
  export interface FilesPayload {
    file: File;
  }

  export interface FileResponseSuccess {
    id: string;
    file: string;
  }
}
