
export interface pupilSchema{
    name: {
      first: string,
      last: string
    },
    image: string,
    dateOfBirth: string, // format date
    phones: 
      {
        phone: string,
        primary: boolean
      }[]
    ,
    sex: string, // male OR female
    description?: string
  }

  export class pupilsModel{

    pupilsDB : Map<number, pupilSchema>
    pupilID : number;
    constructor(){
    this.pupilsDB=new Map();

    }

    public add(pupil: pupilSchema) : number{
        this.pupilID = Math.floor((Math.random() * 1000) + 1);
        this.pupilsDB.set(this.pupilID, pupil)
        return this.pupilID
    }

    public read(pupilID: number) {
        this.pupilID=pupilID;
        let teachertoread=this.pupilsDB.get(this.pupilID)
        return teachertoread 

    }

    public remove(pupilID :number): Map<number, pupilSchema>{
        this.pupilID=pupilID;
        this.pupilsDB.delete(this.pupilID)
        return this.pupilsDB;
    }

    ///update method to add 


  }