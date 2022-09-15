import { File } from ".";

export default class Folder {
  folderName: string | null = null;
  folders?: Folder[] | null = null;
  files: File[] | null = null;
}
