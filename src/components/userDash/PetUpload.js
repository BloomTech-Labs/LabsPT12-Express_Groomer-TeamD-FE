import React, { Component } from 'react';
import './dashboard-styles.scss';
import { Button, Input, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

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
        <h1 className="h1Pet">Pet Photo Upload</h1>
        <div className="formContainer">
          <div className="section1">
            <img
              src="https://peytonsplaceanimalrescue.org/wp-content/uploads/2019/07/pets-about-free-img.png"
              alt=""
            ></img>
          </div>
          <div className="section2">
            {/* <label for="petName">Pet Name:</label> */}
            <h2>Pet Name</h2>
            <Input
              className="petButton1"
              type="text"
              id="petName"
              name="petName"
            ></Input>
            <h2>Pet Type</h2>
            <Select
              className="petButton1"
              defaultValue="Pet Type"
              style={{ width: '30%' }}
            >
              <Option value="Dog">Dog</Option>
              <Option value="Cat">Cat</Option>
              <Option value="Rabbit">Rabbit</Option>
              <Option value="Cat">Horse</Option>
            </Select>
            <h2>Select File</h2>
            <Input
              id="fileSel"
              name="fileSel"
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
        </div>
      </div>
    );
  }
}

export default PetUpload;
