import React, { Component } from 'react';
import { Button , FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import './index.scss';

export default class Upload extends Component {
    state = {

    }
    handleChange = () => {

    }
  render() {
    return (
        <form action="/maker/upload" method="post" encType="multipart/form-data">
            <FormGroup>
                <ControlLabel>选择上传的图片,可以选择多张:</ControlLabel>
                <FormControl
                    type="file"
                    multiple="multiple"
                    name="files[]"
                    value={this.state.value}
                    placeholder="请选择图片"
                    onChange={this.handleChange}
                />

                <HelpBlock>
                    GIF/JPG/PNG/APNG/WebP or other images, up to 2000 files.<br/>
                    Max file size 6MB each or 100MB in total.<br/>
                    You can select multiple files or upload .zip archive with images.
                </HelpBlock>
                <FormControl.Feedback />
            </FormGroup>
            <FormGroup>
                <input type="hidden" name="upload" value="Upload and make a GIF!"/>
                <Button bsStyle="primary" type="submit">
                    点击上传并生成GIF
                </Button>
            </FormGroup>
        </form>
    );
  }
}

