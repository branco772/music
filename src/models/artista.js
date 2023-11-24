import mongoose from 'mongoose';
const { Schema,model,models, ObjectId } = mongoose;
const artistaSchema = new Schema({
  artista:{
    type:String,
    trim:true,
    required:[true,"El nombre del artista es obligatorio"]  
  },
  genero:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El genero es obligatorio"]
  },
  descripcion:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"La descripcion es obligatoria"]
  },
},
{
    timestamps:true
}
);

export default models.Artista || model('Artista',artistaSchema);  