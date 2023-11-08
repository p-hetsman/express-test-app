import React, { useState, ChangeEvent } from 'react';

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import type { UploadProps } from 'antd';

const UploadFile: React.FC = () => {
  const onChange: UploadProps['onChange'] = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Upload
        name="file"
        action="/api/files/upload"
        onChange={onChange}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
};

export default UploadFile;
