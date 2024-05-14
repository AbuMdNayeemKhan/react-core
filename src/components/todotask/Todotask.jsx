const Todotask = ({taskItem, isDone}) => {
    return (
        <div>
            {isDone === true ? <h1>Task 1  {taskItem}</h1> : <h1>No data for show</h1>}
        </div>
    );
};
export default Todotask;