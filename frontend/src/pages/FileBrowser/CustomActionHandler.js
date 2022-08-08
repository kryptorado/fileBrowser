import { ChonkyActions } from "chonky";

const folderSearch = (data, folderChain, currentFolder) => {
    let filesTemp = [];

    for (let i = 0; i < data.length; i++) {
        const folder = data[i];
        folderChain = [...folderChain, { id: folder.id, name: folder.name }];
        
      if (folder.id === currentFolder) {
        if (folder?.files) {
          // eslint-disable-next-line no-loop-func
          folder.files.forEach((file) => {
            filesTemp = [
              ...filesTemp,
                {
                    id: file.id,
                    name: file.name,
                    isDir: file.isDir ? true : false,
                    size: file.size,
                    modDate: file.modDate,
                    childrenCount: file.childrenCount
                }
            ];
          });
        }
        return [true, filesTemp, folderChain];
          
      } else if (folder?.files) {
          let returnValues = folderSearch(folder.files, folderChain, currentFolder);
          if (returnValues[0]) {
              return returnValues;
          }
      }
        
      folderChain = folderChain.slice(0, folderChain.length - 1);
    }
    return [0, null, null];
  };

const findFile = (data, fileId) => {
  for (let i = 0; i < data.length; i++) {
      const folder = data[i];
      
      if (folder.id === fileId) {
          return folder;
      } else if (folder?.files) {
          let returnValues = findFile(folder.files, fileId);
          if (returnValues) {
              return returnValues;
          }
      }
  }
  return null;
};

const handleAction = (data, setCurrentFolder, fileStructure) => {
    if (data.id === ChonkyActions.OpenFiles.id) {
        const file = findFile(fileStructure, data.payload.files[0].id);
        if (file?.isDir) {
            setCurrentFolder(file.id);
        }
    }
};

export { handleAction, folderSearch };
