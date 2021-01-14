import React, {Component} from 'react';
import NoteToDo from "./NoteToDo.js";


class ToDo extends Component {
  constructor() {
    super();
    this.state = {
        notes: [
            // {
            //   title: "Class Notes",
            //   body: "Always use constructors when extending another class"
            // },
            // {
            //   title: "My New Address",
            //   body: "2001 N Lonhill Phoenix, AZ 81234"
            // },
            // {
            //   title: "React Notes",
            //   body: "Everything in React is a component"
            // }
          ]
    }
  }

 

  addNote() {
    this.state.notes.push(
      {
        title: "YO",
        body: "It's all new",
        id: Date.now()

      }
    );
    this.setState(
      {
        notes: this.state.notes
      }
      

    );
  }

  deleteNote(id){
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index,1);
      }
    });
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {
              this.state.notes.map(note => {
                return <NoteToDo key={note.id} id={note.id} deleteHandler={this.deleteNote.bind(this)} />;
            })}
          </div>
        </div>
        <div>
          {/* <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button> */}
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default ToDo;