import Actors from "./components/todotask/Actors";
import Students from "./components/todotask/Students";

function App() {
  const actors = ["Nayeem", "Zioun", "Tishat", "Rafi", "Rohan", "Shohan"];
  const students = [
    {
      id: 1,
      name: "Nayeem",
      job: "Web Dev"
    },
    {
      id: 2,
      name: "Zioun",
      job: "Web Dev"
    },
    {
      id: 3,
      name: "Tishat",
      job: "Writer"
    },
    {
      id: 4,
      name: "Rafi",
      job: "Student"
    },
    {
      id: 5,
      name: "Rohan",
      job: "Student"
    },
    {
      id: 6,
      name: "Shohan",
      job: "Kids"
    },
  ]
  return (
    <>
      <div>
        <h1>Im a person</h1>
        {actors.map(actors => <Actors propsData={actors}></Actors>)}
        {students.map(student => <Students students={student} ></Students>)}
      </div>
    </>
  )
}
export default App
