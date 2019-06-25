import * as SubjectsModel from './SubjectsModel'

 export class LMSModel
  {
      DBsubjects: Map<number, SubjectsModel.subjectsModel>
      boo:boolean

    constructor()
    {
        this.DBsubjects = new Map();

       
    } 

    async add (subject : SubjectsModel.subjectsModel)  {
       
        this.DBsubjects.set(subject.subjectID, subject)
    
       return this.DBsubjects;
    }
    
    async remove(subject : SubjectsModel.subjectsModel)  {
       
        this.DBsubjects.delete(subject.subjectID)
    
       return this.DBsubjects;
    }

    async verify(subject : SubjectsModel.subjectsModel) {
       if(this.DBsubjects.has(subject.subjectID)){
           this.boo=true
           return this.boo;
        }
        else{ 
            this.boo=false;
            return this.boo;
        }
       
    }

    public readAll() :Map<number, SubjectsModel.subjectsModel> {
       
       return this.DBsubjects;
    }

}

