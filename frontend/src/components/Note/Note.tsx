import React from "react";
import "./Note.css";

interface NoteProps{
    noteInfo: any,
    index: number,
    deleteNote: any
}

interface NoteState {
  optionsMenu: boolean
}

class Note extends React.Component<NoteProps, NoteState> {

  constructor(props: NoteProps) {
    super(props);
    this.state = {
      optionsMenu: false
    };
  }

  openOptionsMenu = () => {
    this.setState({
      optionsMenu: !this.state.optionsMenu
    })
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.noteInfo.id, this.props.index)
    this.setState({
      optionsMenu:false
    })
  }

  render() {
    console.log(this.props)
    const title = this.props.noteInfo.title
    const optionsMenu = this.state.optionsMenu && <div className="optionsMenu">
      <div onClick={this.deleteNote}>
        Удалить заметку
      </div>
    </div>
    return (
      <div className='keep'>
        <div className='keep_textContainer'>
          <div className='textContainer_text'>
            {title}
          </div>
        </div>
        <div className='keep_optionsContainer'>
          <div onClick={this.openOptionsMenu} className="options">
            <div className='optionsContainer_deleteKeep'>
            </div>
          </div>
        </div>
        {optionsMenu}
      </div>
    );
  }
}

export default Note;