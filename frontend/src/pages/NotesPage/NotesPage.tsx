import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./NotesPage.css";
import Note from "../../components/Note/Note";
import 'bootstrap/dist/css/bootstrap.css'

interface NotesPageProps {}
interface NotesPageState {
  value: string,
  arrKeeps: Array<NoteText>;
}

interface NoteText {
  id: string,
  title: string,
  createdAt: string,
  updatedAt: string,
  userId: string
}

class NotesPage extends React.Component<NotesPageProps, NotesPageState> {
  constructor(props: NotesPageProps) {
    super(props);
    this.state = {
      value: "",
      arrKeeps: []
    };
  }

  addKeep = () => {
    fetch("http://localhost:4444/note/create", {
      method: "POST",
      body: JSON.stringify({ title: this.state.value, token: localStorage.getItem('token') }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(r => r.json())
      .then(keep => {
        console.log(keep)
        this.setState({
          value: "",
          arrKeeps: this.state.arrKeeps.concat(keep)
        });
      });
  };

  componentDidMount() {
    fetch("http://localhost:4444/note/get", {
      method: "POST",
      body: JSON.stringify({ token: localStorage.getItem('token') }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({ arrKeeps: data, value: "" });
      });
  }

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    });
  };

  exit = () => {
    localStorage.removeItem('token')
    this.setState({
      arrKeeps: []
    })
  }

  deleteNote = (id:string, index:number) => {
    fetch(`http://localhost:4444/note/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((data) => {
      const newArrKeeps = this.state.arrKeeps
      newArrKeeps.splice(index, 1)
      this.setState({
        arrKeeps: newArrKeeps
      })
      console.log(data)
    })
  }

  render() {
    console.log(this.state.value)
    console.log(this.state.arrKeeps)
    const keepsElement = this.state.arrKeeps.map((val, index) => (
      <Note deleteNote={this.deleteNote} noteInfo={val} index={index} />
    ));
    const authorized = localStorage.getItem('token') ? <button onClick={this.exit}>Exit</button> : <div className='header-auth'>
      <Link className='header_registr' to='/registr'>Registration</Link>
      <Link className='header_registr' to='/login'>Login</Link>
    </div>
    return (
      <div className='container'>
        <div className='footer'>
          <input
            className='footer_input'
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Заметка..."
          />
          <button className='footer_button' onClick={this.addKeep}>Keep</button>
          {authorized}
        </div>
        <div className='container_keeps'>
        {keepsElement}
        </div>
      </div>
    );
  }
}

export default NotesPage; 
