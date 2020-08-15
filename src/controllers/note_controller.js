/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
import Note from '../models/note';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

// The method I used in lab three for updateNote took a parameter for changeType, so I needed to change the give code
export const updateNote = (id, changeType, change) => {
  if (changeType === 'title') {
    return Note.findById(id)
      .then((note) => {
        note.title = change;
        return note.save();
      });
  } else if (changeType === 'text') {
    return Note.findById(id)
      .then((note) => {
        note.text = change;
        return note.save();
      });
  } else { // changeType must be 'position', so change is an array [x_pos, y_pos]
    return Note.findById(id)
      .then((note) => {
        note.x = change[0];
        note.y = change[1];
        return note.save();
      });
  }
};

export const deleteNote = (id) => {
  return Note.findByIdAndDelete(id);
};

export const createNote = (fields) => {
  const note = new Note();
  note.title = fields.title;
  note.x = fields.x;
  note.y = fields.y;
  note.zIndex = fields.zIndex;
  note.text = fields.text;

  return note.save();
};
