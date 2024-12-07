  'use client';

  import { useState } from 'react';

  export default function Test() {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!file) return alert('Please select a file first.');

      try {
        const data = new FormData();
        data.append('file', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: data,
        });

        if (!res.ok) throw new Error(await res.text());

        const result = await res.json();
        setUploadStatus(`File uploaded successfully: ${result.path}`);
      } catch (err) {
        console.error(err);
        setUploadStatus('File upload failed. Please try again.');
      }
    };

    return (
      <div>
        <h1>Upload a File</h1>
        <form onSubmit={onSubmit}>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <button type="submit">Upload</button>
        </form>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    );
  }
