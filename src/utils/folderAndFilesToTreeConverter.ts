import { Logs, TreeStructure } from "@/models/core";

export default function folderAndFilesToTreeConverter(logs: Logs): any[] {
  const tree = new TreeStructure();
  let treee: any[] = [];
  logs?.folders?.forEach((folder) => {
    const childrens: any | any[] = [];

    let childFolders: any | any[] = [];
    let childFiles: any | any[] = [];

    // if (folder.folders && folder.folders?.length > 0) {
    childFolders =
      folder?.folders &&
      folder?.folders.length > 0 &&
      folder.folders.map((f) => ({
        name: f.folderName,
        isFile: false
      }));
    // }

    // childrens = [...childrens, childFolders];

    childFiles = folder.files?.map((c) => ({
      name: c.fileName,
      isFile: true
    }));

    const x = childFolders;
    const y = childFiles;
    debugger;

    if (childFolders) {
      childrens.push(...childFolders);
    }

    if (childFiles) {
      childrens.push(...childFiles);
    }

    // childrens = [...childrens, childFolders, childFiles];

    const folderr = { name: folder.folderName, children: childrens };
    debugger;

    treee = [...treee, folderr];
  });

  logs?.files?.forEach((file) => {
    const filee = { name: file.fileName, isFile: true };

    treee = [...treee, filee];
  });
  debugger;

  return treee;
}
