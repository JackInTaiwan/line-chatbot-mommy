import React, { Component } from "react"; 
import "./styles.css";



export default class JournalPhotoView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="journal-photo-view">
        <PhotoBlock title={"超音波照片"} />
        <PhotoBlock title={"媽咪肚肚照"} />
      </div>
    );
  }
}



export class PhotoBlock extends Component {
  constructor(props){
    super(props);

    this.title = this.props.title;
  }

  render() {
    const windowWidth = window.innerWidth;
    const photoBlockWidth = windowWidth * 0.4;
    const photoBlockHeight = photoBlockWidth;

    return(
      <button className="photo-block" style={{width: photoBlockWidth, height: photoBlockHeight}}>
        {this.title}
      </button>
    );
  }
}