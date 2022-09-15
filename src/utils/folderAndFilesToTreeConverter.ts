import { Logs } from "@/models/core";

/**
 * This converts FolderAndFiles structure that comes from the server,
 *   into Tree structure that is used to display vuetify tree.
 *
 * This goes till 2 levels deep. Means folders and files at level 0,
 *   then folders and files at level 1, and files inside the folders at level 1
 *
 * I have not used classes for this because it would make it a bit more
 *   complex and time consuming. I am doing this on the second last day
 *   of my job. So, plz excuse me for using plain old javascript in this.
 * @param logs
 * @returns
 */
export default function folderAndFilesToTreeConverter(logs: Logs): any[] {
  let tree: any[] = [];

  //Iterating through all the folders at level 0
  logs?.folders?.forEach((folder) => {
    const childrens: any | any[] = [];

    let childFolders: any | any[] = [];
    let childFiles: any | any[] = [];

    //Iterating through all child folders
    childFolders =
      folder?.folders &&
      folder?.folders.length > 0 &&
      folder.folders.map((f) => {
        //Iterating through files inside child folders
        let subFolderChildren: any | any[] = [];

        if (f.files && f.files?.length > 0) {
          subFolderChildren = f.files.map((c) => {
            return {
              name: c.fileName,
              isFile: true
            };
          });
        }

        return {
          name: f.folderName,
          isFile: false,
          children: subFolderChildren
        };
      });

    //Iterating through all child files
    childFiles = folder.files?.map((c) => ({
      name: c.fileName,
      isFile: true
    }));

    if (childFolders) {
      childrens.push(...childFolders);
    }

    if (childFiles) {
      childrens.push(...childFiles);
    }

    const transformedFolder = { name: folder.folderName, children: childrens };

    tree = [...tree, transformedFolder];
  });

  //Iterating through all the files at level 0
  logs?.files?.forEach((file) => {
    const filee = { name: file.fileName, isFile: true };

    tree = [...tree, filee];
  });
  debugger;

  return tree;
}
