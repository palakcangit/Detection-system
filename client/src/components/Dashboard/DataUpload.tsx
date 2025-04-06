import { Button, Box, Typography, CircularProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { useState } from 'react';
import axios from 'axios';

export const DataUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsUploading(true);
    const formData = new FormData();
    formData.append('dataset', file);

    try {
      await axios.post('/api/datasets/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadSuccess(true);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box sx={{ p: 3, border: '1px dashed grey', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload IoT Dataset
      </Typography>
      <input
        accept=".csv,.json"
        style={{ display: 'none' }}
        id="dataset-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="dataset-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
          disabled={isUploading}
        >
          Select File
        </Button>
      </label>
      {file && (
        <Typography variant="body1" sx={{ mt: 1 }}>
          Selected: {file.name}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, ml: 2 }}
        onClick={handleUpload}
        disabled={!file || isUploading}
        startIcon={isUploading ? <CircularProgress size={20} /> : null}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>
      {uploadSuccess && (
        <Typography color="success.main" sx={{ mt: 1 }}>
          Upload successful! Processing data...
        </Typography>
      )}
    </Box>
  );
};