export default class TreeStructure {
  root: Root[] | null = null;
}

export class Root {
  folderName: string | null = null;
  children: Child[] | null = null;
  file?: string | null = null;
}

export class Child {
  folderName: string | null = null;
  children?: Child[] | null = null;
  file?: string | null = null;
}

// export class TreeFile {
//   fileName: string | null = null;
//   children?: TreeFile[] | null = null;
// }
