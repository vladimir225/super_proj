import React from "react";
interface AppProps{
    title:string
}
interface AppState{
  
}

class Note extends React.Component<AppProps, AppState> {
  state = {
    
  }
  render() {
    const title = this.props.title
    return (
      <div className='keep'>
        <div className='keep_textContainer'>
          <div className='textContainer_text'>
            {title}
          </div>
        </div>
        <div className='keep_optionsContainer'>
          <div className='optionsContainer_deleteKeep'>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Note;