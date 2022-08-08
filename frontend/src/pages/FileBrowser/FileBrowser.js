
import { useEffect, useState } from 'react';
import { FullFileBrowser, ChonkyActions } from 'chonky';
import { handleAction, folderSearch } from "./CustomActionHandler";

let API_GET_FILES = "api/files"

function FileBrowser() {
    const [data, setData] = useState([]);
    const [files, setFiles] = useState(null);
    const [folderChain, setFolderChain] = useState(null);
    const [currentFolder, setCurrentFolder] = useState("0");
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch(API_GET_FILES)
            .then(response => response.json())
            .then(response => {
                setData(response)
                setLoading(false)
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
        
        <div style={{ height: "100vh" }}>
            {loading ? (
                <p>Loading Please wait...</p>
            ) : (
                <FullFileBrowser files={files} folderChain={folderChain} onFileAction={handleActionWrapper} defaultFileViewActionId={ChonkyActions.EnableListView.id} />
            )}
        </div>
    );
  }

export { FileBrowser };
