import React from 'react';
//import ReactDOM from 'react-dom';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export function PicUpload() {
  return (
    <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
      <Button icon={<UploadOutlined />}>Upload Pictures</Button>
    </Upload>
  );
}
