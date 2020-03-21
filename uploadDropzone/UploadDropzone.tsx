import React, { useCallback, useEffect, useState } from 'react'
import './UploadDropzone.scss'
import { useDropzone } from 'react-dropzone'

export const UploadDropzone = ({ handleSelected, fileMetadata }) => {
    const [fileNameEtc, setFileNameEtc] = useState<any | undefined>(undefined)
    const onDrop = useCallback(async acceptedFiles => handleSelected(acceptedFiles), [handleSelected])
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true, }); // needs to be just one? Would need to try/catch here, throw error? 


    useEffect(() => {
        if ((!fileMetadata && (acceptedFiles && acceptedFiles.length > 0)) || (fileMetadata && (!acceptedFiles || acceptedFiles.length === 0))) {
            const theFile = fileMetadata?.highQuality?.metadata || acceptedFiles[0]
            if (theFile) {
                const nameEtc = {
                    path: theFile.name,
                    size: theFile.size
                }
                setFileNameEtc(nameEtc)
            }
        }
    }, [fileMetadata, acceptedFiles])


    const Files = () => (
        fileNameEtc ? <li key={fileNameEtc.path}>
            {fileNameEtc.path} - {fileNameEtc.size} bytes
        </li> : null
    );

    return (
        <div className="outer-container">
            <section className="container">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag and drop files here, or click to select files</p>
                </div>
                <aside>
                    <h4>File:</h4>
                    <ul><Files /></ul>
                </aside>
            </section>
        </div>
    );
}