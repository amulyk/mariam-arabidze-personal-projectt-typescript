import {pupilSchema, pupilsModel} from './PupilsModel'

export interface GroupsModel{
   
 room:number;
 pupils: pupilSchema[]

}

export class groupsModel {

grouproom : object;
pupils: pupilSchema[]
pupil:pupilSchema
groupRoomDB: Map<string, object>
grouproomobj:object
room :number
groupid: string
groupsDB: Map<string, {}>
addpupil: string
name:string


constructor(){
    this.pupils=new Array
    this.groupsDB=new Map();
    this.groupRoomDB=new Map();
}

public add (room : number) {
    this.room=room
    this.groupid = Math.random().toString(36).substring(7);
    this.grouproomobj= new Object({
        room:room,
        pupils:this.pupils
    })
    
    this.groupRoomDB.set(this.groupid, this.grouproomobj)  

    
return this.groupid

}


public addPupils(groupID : string, pupil: pupilSchema){

    this.groupid=groupID,
    this.pupil=pupil,
    this.pupils.push(this.pupil)
    this.groupsDB.set(this.groupid, this.grouproomobj)
    return this.grouproomobj

}

// public removePupil(groupId :string, pupilID:number)
// {
//     this.groupid=groupId;

//     this.groupsDB.get(this.groupid)

// }



public read(groupID : string){
this.groupid=groupID;
return this.groupsDB.get(this.groupid);
}

public readAll() : Map<string, any>{
return this.groupsDB
}


}
