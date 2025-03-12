import { model, Schema } from 'mongoose';

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
 projectLiveUrl:{
    type:String,  
 },
 projectImage:{
    type:String
 },
 title:{
    type:String
 },
description:{
    type:String
},
githubClient:{
    type:String
},
githubServer:{
    type:String
}

},{
    timestamps:true
});

const Projects = model("Projects",projectSchema)
export default Projects