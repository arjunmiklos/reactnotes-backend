import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
});

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
