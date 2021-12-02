import Navbar from './Navbar';
import TaskList from './Components/TaskList';
import TaskAddDel from './Components/TaskAddDel';
// <Navbar />
function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskAddDel />
      <TaskList />
    </div>
  );
}

export default App;