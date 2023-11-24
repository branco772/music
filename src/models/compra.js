import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const compraSchema = new Schema({
  titulo:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El titulo del album es obligatorio"]
  },
  artista:{
    type:String,
    trim:true,
    required:[true,"El nombre del artista es obligatorio"]  
  },
  visible:{
    type:Boolean,
    default:true
  },
},
{
    timestamps:true
}
);

export default models.Album || model('Album',compraSchema);  