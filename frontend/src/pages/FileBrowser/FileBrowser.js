import { useEffect, useState } from 'react';
import { FullFileBrowser } from 'chonky';
import { handleAction, folderSearch } from "./CustomActionHandler";

function FileBrowser() {
    const [data, setData] = useState([]);
    const [files, setFiles] = useState(null);
    const [folderChain, setFolderChain] = useState(null);
    const [currentFolder, setCurrentFolder] = useState("0");

    useEffect(() => {
        fetch('api/files')
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
    }, []);

    const handleActionWrapper = (file) => {
        handleAction(file, setCurrentFolder, data);
    };
  
    useEffect(() => {
        let folderChain = [];
        let files = [];
        const [found, filesTemp, folderChainTemp] = folderSearch(
            data,
            folderChain,
            currentFolder
        );
        if (found) {
            files = filesTemp;
            folderChain = folderChainTemp;
        }
        setFolderChain(folderChain);
        setFiles(files);
    }, [data, currentFolder]);

    return (
        <div>
            <FullFileBrowser files={files} folderChain={folderChain} onFileAction={handleActionWrapper} />
        </div>
    );
  }

export { FileBrowser };
