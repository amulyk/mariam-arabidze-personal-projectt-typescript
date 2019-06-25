


export interface teacherSchema{
    name: {
      first: string,
      last : string
    },
    image: string,
    dateOfBirth: string, // format date
    emails: 
      {
        email: string,
        primary: boolean
      }[]
    ,
    phones: 
      {
        phone: string,
        primary: boolean
      }[]
    ,
    sex: string, // male or female
    subjects: 
      {
        subject: string
      }[]
    ,
    description?: string,

  }

  interface updatedTeacher{
    name?: {
      first?: string,
      last? : string
    },
    image?: string,
    dateOfBirth?: string, // format date
    emails?: 
      {
        email: string,
        primary: boolean
      }[]
    ,
    phones: 
      {
        phone?: string,
        primary?: boolean
      }[]
    ,
    sex?: string, // male or female
    subjects?: 
      {
        subject?: string
      }[]
    ,
    description?: string,
  }


  export class teachersModel {

    teacher: teacherSchema
    teacherID:number
    teachersDB: Map<number, teacherSchema>

    constructor(){
        this.teachersDB = new Map();

      }

    public add(teacher: teacherSchema) : number{
        this.teacherID= Math.floor((Math.random() * 1000) + 1);
        this.teacher=teacher;
        this.teachersDB.set(this.teacherID, this.teacher)
        return this.teacherID
    }

    public read(teacherID : number) : teacherSchema|undefined{
        this.teacherID=teacherID
        return this.teachersDB.get(this.teacherID)

    }
    

    public remove(teacherID : number): Map<number, teacherSchema>{
        this.teacherID=teacherID
        this.teachersDB.delete(this.teacherID)
        return this.teachersDB;
    }
    

    // public update(teacherID: number, teacherUpdate: updatedTeacher): teacherSchema{
    //      this.teacherID=teacherID
    //      const prevTeacher =this.teachersDB.get(this.teacherID)
    //      const updatedTeacher = this.merge(prevTeacher,teacherUpdate)
  
      

    //      return updatedTeacher
    //  }
  }

  