import { Logs, TreeStructure } from "@/models/core";
import { Root } from "@/models/core/treeStructure";

export default function folderAndFilesToTreeConverter(logs: Logs): any[] {
  const tree = new TreeStructure();
  let treee: any[] = [];
  logs?.folders?.forEach((folder) => {
    if (folder.folders && folder.folders?.length > 0) {
      const x = 1;
    }

    const childrens = folder.files?.map((c) => ({
      name: c.fileName,
      isFile: true
    }));
    debugger;

    const folderr = { name: folder.folderName, children: childrens };
    debugger;

    treee = [...treee, folderr];
    // const root = new Root();
    // root.folderName = folder.folderName;
    // if (folder?.files && folder.files.length > 0) {
    //   const a = folder.files;
    //   const m = folder.files.map((a) => Object.assign({}, a));
    //   const y = [...folder.files];
    //   root.children = [...folder.files];
    //   debugger;
    // }
  });

  logs?.files?.forEach((file) => {
    const filee = { name: file.fileName, isFile: true };

    treee = [...treee, filee];
  });
  debugger;

  return treee;
}
