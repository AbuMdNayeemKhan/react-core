import Actors from "./components/todotask/Actors";

function App() {
  const actors = ["Nayeem", "Zioun", "Tishat", "Rafi", "Rohan", "Shohan"];
  return (
    <>
      <div>
        <h1>Im a person</h1>
        {actors.map(actors => <Actors propsData={actors}></Actors>)}
      </div>
    </>
  )
}
export default App
