import React from "react";
import "./Note.css";

interface NoteProps{
    noteInfo: noteInfo,
    index: number,
    deleteNote: any,
    editNote: any,
    showEditor: any
}

interface noteInfo {
  id: string,
  title: string,
  createdAt: string,
  updatedAt: string,
  userId: string
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

  editNote = () => {
    this.setState({
      optionsMenu: false
    })
    this.props.editNote(this.props.noteInfo, this.props.index)
  }

  render() {
    const title = this.props.noteInfo.title
    const showClose = this.props.showEditor ? 'showClose' : ''
    const optionsMenu = this.state.optionsMenu && <div className="optionsMenu">
      <div onClick={this.deleteNote}>
        Удалить заметку
      </div>
      <div onClick={this.editNote}>
         Изменить
      </div>
    </div>
    return (
      <div className={`keep ${showClose}`}>
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