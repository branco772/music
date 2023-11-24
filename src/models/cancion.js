import mongoose from 'mongoose';
const { Schema,model,models, ObjectId } = mongoose;
const cancionSchema = new Schema({
  titulo:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El titulo es obligatorio"]
  },
  artista:{
    type:String,
    trim:true,
    required:[true,"El nombre del artista es obligatorio"]  
  },
  imagen:{
    type:String,
    trim:true,
    required:[true,"Imagen Obligatoria"],
    default:'#'
  },
  visible:{
    type:Boolean,
    default:true
  },
  orden:{
    type:Number,
    default:0
  },
  album:{
    type:ObjectId,
    ref:'Album'
  },
  artistas:{
    type:ObjectId,
    ref:'Artista'
  },
  user:{
    type:ObjectId,
    ref:'User'
  },
  pedido:{
    type:ObjectId,
    ref:'Pedido'
  },
  compra:{
    type:ObjectId,
    ref:'Compra'
  }
},
{
    timestamps:true
}
);

export default models.Cancion || model('Cancion',cancionSchema);  