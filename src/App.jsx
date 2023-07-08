import { useState } from 'react'
import './App.css'
import TODOVERİ from './compenents/TodoVeri'
import TodoList from './compenents/TodoList'

function App() {
  const [tasks, setTasks] = useState([])
  
  const getir=(baslik,aciklama)=> {
    console.log(baslik, aciklama);
    setTasks([...tasks, {
      id: Math.floor(Math.random() * 1000),
      title: baslik,
      task: aciklama,
    }]);
   
  }
  const gorevSil=(id) => {
    //console.log(id); 
    /* dizi seçilen elamını silme */
   const newTasks= tasks.filter((task) => {
      return task.id !=id
   })
    setTasks(newTasks);
  }
  const baslikveAciklamaDegis = (yenibaslik, yeniaciklama, gonderİd) => {
    //console.log(gonderİd);
    const duzenleme = tasks.map((task) => {
      if (task.id == gonderİd) {
        return {
          id: gonderİd,
          title: yenibaslik, task: yeniaciklama
        }
      }
      else {
        return task;
      }})
    setTasks(duzenleme);
  }
  return (
    <div className='App'>
      <TODOVERİ gonder={getir} />
      <h1>Görevler</h1>
      <TodoList tasks={tasks} dele={gorevSil} duzenle={baslikveAciklamaDegis} />
    </div>
  )
}
export default App
