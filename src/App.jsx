import Todotask from "./components/todotask/Todotask"

function App() {
  return (
    <>
      <div>
        <h1>Im a person</h1>
        <Todotask taskItem="Eating Vat" isDone={true}></Todotask>
      </div>
    </>
  )
}
export default App
