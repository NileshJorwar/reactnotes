import React from "react";
import Note from "./note";
import "./index.css"

const Notes = props => {
    const {notes, handleDelete, handleContent, handleTitle} = props;

    return (
        <div className="notes__container">
            {notes.map((note, index) => (
                <Note
                    key={index} {...note}
                    index={index}
                    handleDelete={handleDelete}
                    handleContent={handleContent}
                    handleTitle={handleTitle}
                />

            ))}
        </div>
    );
}

export default Notes;