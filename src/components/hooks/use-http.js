import React,{useState} from 'react'

 const useHttp=()=> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://projectone-35744-default-rtdb.firebaseio.com/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey,
           text: data[taskKey].text
           });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  return (
    <div>

    </div>
  )
}

export default useHttp;
