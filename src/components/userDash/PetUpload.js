import React, { Component } from 'react';
import './dashboard-styles.scss';
import { Button, Input } from 'antd';
import axios from 'axios';

class PetUpload extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('www.test.com', fd).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        <h1>Upload Pictures</h1>
        <Input
          className="petButton1"
          type="file"
          onChange={this.fileSelectedHandler}
          ref={fileInput => (this.fileInput = fileInput)}
        />
        <Button
          type="primary"
          className="petButton2"
          onClick={this.fileUploadHandler}
        >
          Upload
        </Button>
      </div>
    );
  }
}

export default PetUpload;
