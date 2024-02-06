import { model, Schema, Types } from "mongoose";

const collection = "orders";
const schema = new Schema(
  {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    event_id: { type: Types.ObjectId, required: true, ref: "events" },
    //las propiedades que necesiten referenciarse o relacionarse con otros modelos de otras colecciones
    //deben configurarse como de tipo ObjectId
    //y con el atributo ref, para referenciar hacial "tal" colección
    quantity: { type: Number, default: 1 },
    state: {
      type: String,
      default: "reserved",
      enum: ["reserved", "payed", "delivered"],
    },
    //en state pasa lo mismo que para los roles
    //puedo definirlo como numero
    //0
    //1
    //2
    //puedo definirlo como string
    //reserved
    //payed
    //delivered
  },
  { timestamps: true }
);

const Order = model(collection, schema);
export default Order;
