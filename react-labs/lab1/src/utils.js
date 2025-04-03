export const sumOfTeachersAges = (data) => {
    return data.map((t)=>t.teacherAge).reduce((sum,age)=>sum+age).toString();
  }
  
export const sumOfActiveTeachersAges = (data) => {
    return data.map((t)=>t.active?t.teacherAge:0).reduce((sum,age)=>sum+age).toString();
    // return data.filter((t)=>t.active).map((t)=>t.teacherAge).reduce((sum,age)=>(sum+age)).toString(); -- also works
  }
  
export const listOfAllStudents = (data) => {
    return data.flatMap((t)=>t.students).map((s)=>s.name).sort();
  }