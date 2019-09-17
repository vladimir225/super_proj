import React from "react";
import './NoteEditor.css';

interface NoteEditorProps {
    noteInfo: NoteInfo,
    editNote: any
}
interface NoteEditorState {
    value: string
}

interface NoteInfo {
    id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    userId: string
  }

class NoteEditor extends React.Component<NoteEditorProps, NoteEditorState> {
    constructor(props: NoteEditorProps) {
      super(props);
      this.state = {
        value: this.props.noteInfo.title
      };
    }

    handleChange = (event:any) => {
        this.setState({
            value: event.target.value
        })
    }

    close = () => {
        fetch(`http://localhost:4444/note/edit/${this.props.noteInfo.id}`, {
            method: "PUT",
            body: JSON.stringify({ title: this.state.value}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(editNote => {
            console.log(editNote)
            this.props.editNote(editNote)
        });
    };

    render() {
        console.log(this.state.value)
        const editTime = this.props.noteInfo.updatedAt.slice(0, this.props.noteInfo.updatedAt.indexOf("T"))
        return(
            <div className='editorContainer'>
                <div className="editor">
                    <div>
                        <input value={this.state.value} onChange={this.handleChange} className='textInput' />
                        <div className="editTime">
                            {editTime}
                        </div>
                        <div className="optionsContainer">
                            <button onClick={this.close} className="buttonClose">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NoteEditor;