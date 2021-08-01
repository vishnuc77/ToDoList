import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState ([
      {
          id: 1,
          text: 'Buy',
          day: 'Feb 5th',
          reminder: true,
      },
      {
          id: 2,
          text: 'Sell',
          day: 'Feb 12th',
          reminder: true,
      },
      {
          id: 3,
          text: 'Food',
          day: 'Feb 25th',
          reminder: false,
      },
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id ===id 
    ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ): (
          'No tasks'
        )}
    </div>
  );
}

export default App;
