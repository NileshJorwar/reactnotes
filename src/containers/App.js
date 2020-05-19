import React, {Component} from 'react';
import Navbar from "../components/navbar";
import Notes from "../components/notes";
import './App.css';

class App extends Component {

    state = {
        notes: [
            {
                title: "My Note",
                content: "Hi Hello"
            }
        ]
    };
    handleDelete = e => {
        console.log("Delete", e);
    };

    handleTitle = (e, index) => {

        console.log("Title", e, index);
        const {target: {value}} = e;
        const {notes} = this.state;
        const newNotes = notes.slice();
        const newNote = newNotes[index];

        newNotes.slice(index, 1, {...newNote, title: value});

        this.setState({notes: newNotes});
    };
    handleContent = (e,index) => {
        console.log("Content", e);
        const {target: {value}} = e;
        const {notes} = this.state;
        const newNotes = notes.slice();
        const newNote = newNotes[index];

        newNotes.slice(index, 1, {...newNote, content: value});

        this.setState({notes: newNotes});
    };

    render() {
        const {notes} = this.state;

        return (
            <div>
                <Navbar/>
                <div className="app__container">
                    <Notes notes={notes}
                           handleDelete={this.handleDelete}
                           handleTitle={this.handleTitle}
                           handleContent={this.handleContent}
                    />
                </div>
            </div>
        );
    }
}

export default App;
