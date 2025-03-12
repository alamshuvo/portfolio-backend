import { model, Schema } from 'mongoose';

const blogsSchema = new Schema({
  blogName: {
    type: String,
    required: true,
  },
 blogUrl:{
    type:String,  
 },
 blogImage:{
    type:String
 },
description:{
    type:String
}

},{
    timestamps:true
});

const Blogs = model("Blogs",blogsSchema)
export default Blogs