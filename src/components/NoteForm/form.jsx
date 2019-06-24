import React, {Component} from 'react';
import './form.css';

class NoteForm extends Component
{
    constructor()
    {
        super();
        this.addNote = this.addNote.bind(this);
    }

    removeNote(){

    }

    addNote(){
        this.props.addNote(this.textInput.value);
        this.textInput.value = "";
    }

    render(){
        return(
            <div className="NoteForm">
                <input 
                ref={input => {this.textInput = input;}} 
                placeholder= "escribe una nota" 
                type="text"/>
                <button
                onClick={this.addNote}
                >
                    Add Note
                </button>
            </div>
        )
    }
}

export default NoteForm