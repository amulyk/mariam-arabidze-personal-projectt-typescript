import {pupilSchema} from './PupilsModel'
import {teacherSchema} from './TeachersModel'
import {GroupsModel, groupsModel} from './GroupsModel'
import { LMSModel } from './LMSModel';
import { subjectsModel } from './SubjectsModel';

export interface record{
    pupilId: number,
    teacherId: number,
    subjectId: number,
    lesson: number,
    mark: number
  
}

export class gradebooksModel{

    groupid :groupsModel;
    subjectid: LMSModel;
    teacherid: teacherSchema;
    level :number
    levelobj : object
    record:object
    gradebookDB:Map<string, object>
    gradebookid:string
    records: record[]


    constructor(groups :groupsModel, teachers:  teacherSchema, lms : LMSModel){

        this.groupid=groups;
        this.teacherid=teachers;
        this.subjectid=lms;
        

    }

    public add (level:number, groupid:string){
        this.gradebookid = Math.random().toString(36).substring(7);
        this.levelobj= new Object({
            level:level,
            records : [],
            gradebookid: this.gradebookid
        })

        this.gradebookDB.set(this.gradebookid, this.levelobj)  
        return this.gradebookid
    }
    public clear(){
        this.gradebookDB.clear();
    }

    public addrecords(gradebookId:string, record:record){
        this.gradebookid=gradebookId;
        this.record=record;
        this.records.push(record)
        this.gradebookDB.set(this.gradebookid, this.records)
    return this.gradebookDB

    }
        
    
    
} 