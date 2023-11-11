import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const pedidoSchema = new Schema({
  titulo:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El titulo es obligatorio"]
  },
  imagen:{
    type:String,
    trim:true,
    required:[true,"Imagen Obligatoria"],
    default:'#'
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
  orden:{
    type:Number,
    default:0
  }
},
{
    timestamps:true
}
);

export default models.Cancion || model('Cancion',pedidoSchema);  