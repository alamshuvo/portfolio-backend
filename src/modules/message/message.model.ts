import { model, Schema } from 'mongoose';

const messageSchema = new Schema({
message:{
    type:String,
    required:true
}


},{
    timestamps:true
});

const message = model("Message",messageSchema)
export default message