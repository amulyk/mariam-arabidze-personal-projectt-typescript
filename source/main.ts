import {subjectsModel, LMSModel, teachersModel, pupilsModel, groupsModel, gradebooksModel} from './school';


//test subjectsModel 
const math = new subjectsModel({title: "math", lessons: 24, description: "kj"});
const physics = new subjectsModel({title: "physics", lessons: 20, description: "kk"});
//console.log(math.subjectID);
//console.log(physics.subjectID);

//testLMSModel
const lms = new LMSModel();
//   console.log(lms.add(math));
//   console.log(lms.add(physics));
// //  console.log(lms.remove(math));
// //  console.log(lms.verify(math));
// //  console.log(lms.verify(physics));
//   console.log(lms.readAll());

//testTeachersModel
const teachers = new teachersModel();

const mathteacher1 ={
    name: {
    first: "Amanda",
    last : "Black"
  },
  image: "someimagehere",
  dateOfBirth: "15.12.1996", // format date
  emails: [
    {
      email: "marabidze@sdsu.edu",
      primary: true
    },
  
  ],
  phones: [
    {
      phone:  "8727272727",
      primary: true
    }
  ],
  sex: "female", // male or female
  subjects: [
    {
      subject : 'math'
    }
  ]
}


const physicsteacher1 ={
    name: {
    first: "Ken",
    last : "Walsh"
  },
  image: "someimagehere",
  dateOfBirth: "25.02.1970", // format date
  emails: [
    {
      email: "marabidze@sdsu.edu",
      primary: true
    },
  
  ],
  phones: [
    {
      phone:  "8727272727",
      primary: true
    }
  ],
  sex: "male", // male or female
  subjects: [
    {
      subject : 'physics'
    }
  ]
}
  let mathteacherID=teachers.add(mathteacher1)
//  console.log(mathteacherID)
//  let physicsteacherID=teachers.add(physicsteacher1)
//  console.log(physicsteacherID)
//  console.log(teachers.read(mathteacherID))
//  console.log(teachers.read(physicsteacherID))
//  console.log(teachers.remove(physicsteacherID))
    

//testPupilsModel
const pupils = new pupilsModel();
const pupil1={   
    name: {
    first: "Paul",
    last: "Spitzer"
  },
  image: "someimage",
  dateOfBirth: "12/05/2000", // format date
  phones: [
    {
      phone: "9488093093",
      primary: true
    }
  ],
  sex: "male", // male OR female
}
const pupil2={
    name: {
        first: "Jim",
        last: "Frankelfield"
      },
      image: "someimage",
      dateOfBirth: "02/07/2001", // format date
      phones: [
        {
          phone: "9488093091",
          primary: true
        }
      ],
      sex: "male", // male OR female
}

 let pupil_1=pupils.add(pupil1)
 let pupil_2=pupils.add(pupil2)
// console.log(pupils.read(pupil_1))
// console.log(pupils.read(pupil_2))
// console.log(pupils.remove(pupil_1))




//test groupsmodel

 const room1 = 236;
 const groups = new groupsModel();

  const group_1 = groups.add(room1);
 console.log(group_1)

 console.log(groups.addPupils(group_1, pupil1))
 console.log(groups.addPupils(group_1, pupil2))
 console.log(groups.read(group_1))
 console.log(groups.readAll())

//test gradebookModel

const pupilId = pupil_1;
const teacherId = mathteacherID;
const gradebooks = new gradebooksModel(groups, mathteacher1, lms);

// Create a new gradebook
const level = 1;
const gradebookid = gradebooks.add(level, group_1);

// Destroy all data inside this gradebook
gradebooks.clear();

const record = {
    pupilId: pupil_1,
    teacherId: teacherId,
    subjectId: math.subjectID,
    lesson: 1,
    mark: 9
  };
  
  console.log(gradebooks.addrecords(gradebookid, record));