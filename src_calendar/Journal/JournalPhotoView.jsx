import React, { Component } from "react"; 
import "./styles.css";
import ImageUploader from "react-images-upload";



export default class JournalPhotoView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="journal-photo-view">
        <PhotoBlock title={"超音波照片"} />
        <PhotoBlock title={"側面肚肚照"} />
      </div>
    );
  }
}



export class PhotoBlock extends Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false,
    }

    this.title = this.props.title;
    this.afterUpload = this.afterUpload.bind(this);
  }

  afterUpload() {
    this.setState((prev) => {
      let newState = prev;
      newState.loaded = true;
      return newState
    })
  }

  render() {
    const windowWidth = window.innerWidth;
    const photoBlockWidth = windowWidth * 0.4;
    const photoBlockHeight = photoBlockWidth;
    const beforeUploadStyle = {
      width: "100%",
      height: "100%",
      opacity: 0,
    }
    const afterUploadStyle = {
      width: "100%",
      height: "100%",
      opacity: 1.0,
    }
    const deleteButtonStyles = `
    .fileContainer .deleteImage {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0px;
      right: 0px;
      background-color: #fff;
      width: 20px;
      height: 20px;
      font-size: 7px;
      border: solid;
      border-width: 1px;
      border-color: #a85d60;
      color: #a85d60;
    }
    `
    const styles = `
    .fileContainer{
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: transparent;
      box-shadow: none;
      border-radius: 0px;
      padding: 0px;
      margin: 0px;
      transition: all 0.3s ease-in;
    }

    .uploadPicturesWrapper{
      position: absolute;
      background-color: transparent;
    }

    .fileContainer .uploadPictureContainer {
      box-shadow: none;
      background-color: transparent;
      border: 0px;
      width: 95%;
      max-width: 95%;
      max-height: 95%;
    }
    `
    
    return(
      <div className="photo-block" style={{width: photoBlockWidth, height: photoBlockHeight}}>
        <style>{deleteButtonStyles}</style>
        <style>{styles}</style>
        <div className="photo-upload-font" style={this.state.loaded ? {color:"transparent"} : {color:"#a79883"}}>{this.title}</div>
        <div style={this.state.loaded ? afterUploadStyle : beforeUploadStyle}>
          <ImageUploader
            onChange={this.afterUpload}
            withPreview={true}
            buttonStyles={{width:"100%", height:"100%", margin:0, borderWidth:0, outline: 0, backgroundColor: "transparent"}}
            withIcon={false}
            withLabel={false}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            singleImage={true}
          />
        </div>
      </div>
    );
  }
}