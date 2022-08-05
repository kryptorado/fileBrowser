import {useEffect, useState} from 'react';

function List() {
    const [files, setFiles] = useState([]);
  
    useEffect(() => {
        fetch('api/files')
            .then(response => response.json())
            .then(data => setFiles(data));
    }, []);
  
    return (
        <div>
            {files.map(files => <div>{files.key}</div>)}
      </div>
    );
  }

export { List };
