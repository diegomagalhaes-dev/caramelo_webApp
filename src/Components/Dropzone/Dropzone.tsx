import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import { StyDropzone } from "./styDropzone";

interface Props {
  onFileUploaded: (file?: File) => void;
}

const Dropzone = ({ onFileUploaded }: Props) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState<string>();
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <StyDropzone {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt={"Preview imagem do comedouro"} />
      ) : (
        <div className="internalCallDropzone">
          <FiUpload size={22} color="#F8961E" />
          <p>Imagem para o comedouro</p>
        </div>
      )}
    </StyDropzone>
  );
};

export default Dropzone;
