
interface subjModel{
    title: string,
    lessons: number, 
    description?: string,
 
}

 export class subjectsModel
  {
    subject : subjModel
    subjectID : number

    constructor(subject:subjModel)
    {
        this.subject=subject
        this.subjectID=Math.floor((Math.random() * 1000) + 1);
    }

    

    
}

//const math  = new subjectsModel({title: "math", lessons: 24, description: "kj");
//console.log(math.subje)
