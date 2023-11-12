import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const pedidoSchema = new Schema({
  detalle:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El detalle es obligatorio"]
  },
  nombre:{
    type:String,
    trim:true,
    required:[true,"Imagen Obligatoria"],
    default:'#'
  },
  pago:{
    type:String,
    trim:true,
    required:[true,"Pago Obligatoria"],
    default:'0'
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

export default models.Pedido || model('Pedido',pedidoSchema);  