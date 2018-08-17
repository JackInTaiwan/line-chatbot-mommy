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
      opacity: 0,
    }
    const afterUploadStyle = {
      opacity: 1.0,
    }
    const deleteButtonStyles = `
    .fileContainer .deleteImage {
      background-color: #c2b4a1;
      width: 25px;
      height: 25px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `
    
    return(
      <div className="photo-block" style={{width: photoBlockWidth, height: photoBlockHeight}}>
        <style>{deleteButtonStyles}</style>
        <div className="photo-upload-font">{this.title}</div>
        <div style={this.state.loaded ? afterUploadStyle : beforeUploadStyle}>
          <ImageUploader
            onChange={this.afterUpload}
            withPreview={true}
            buttonStyles={{width:100, height:100, borderWidth:0, outline: 0, backgroundColor: "transparent"}}
            withIcon={false}
            withLabel={false}
            buttonText='Choose images'
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            singleImage={true}
          />
        </div>
      </div>
    );
  }
}