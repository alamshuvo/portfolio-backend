import { Schema } from 'mongoose';

const blogsSchema = new Schema({
  blogName: {
    type: String,
    required: true,
  },
 blogUrl:{
    type:String,
   
 },


});
