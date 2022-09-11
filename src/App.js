
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';
import { useEffect,useState,Fragment } from 'react';

function App() {
const [tasks, setTasks] = useState([])

const transFormTask=  (taskObj)=>{
  const loadedTask=[]


  for(const taskKey in taskObj){
    loadedTask.push({
      id:taskKey,
      text:taskObj[taskKey].text
    })
  }

  setTasks(loadedTask)

}
const {isLoading,error,sendRequest: fetchTasks}=useHttp()


  useEffect(() => {
    fetchTasks({url:'https://projectone-35744-default-rtdb.firebaseio.com/tasks.json'},transFormTask);
  },[]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
 <Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
      </Fragment>

  );
}

export default App;
