import { useEffect, useState } from 'react'
import './App.css'
import TODOVERİ from './compenents/TodoVeri'
import TodoList from './compenents/TodoList'
import axios from 'axios'


function App() {
  /*
  get--getirme
  post-- ekleme
  put--gunceleme
  delete--silme
  */
  const [tasks, setTasks] = useState([])
  const getir=async(baslik,aciklama)=> {
   // console.log(baslik, aciklama);
    const response=await axios.post('http://localhost:3004/tasks',{title: baslik,task: aciklama})
    const dizi = [...tasks,response.data
      // {
      // id: Math.floor(Math.random() * 1000),
      // title: baslik,
      // task: aciklama,
      // }
    ]
    setTasks(dizi);
    console.log(response);
  }
  const fetchData=async() => {
    const res = await axios.get('http://localhost:3004/tasks');
    setTasks(res.data);
  }
  useEffect(() => {
    fetchData();
  },[])
  
  const gorevSil=async(id) => {
    //console.log(id); 
    /* dizi seçilen elamını silme */
    // silme
 await axios.delete('http://localhost:3004/tasks/'+id)
   const newTasks= tasks.filter((task) => {
      return task.id !=id
   })
    
    setTasks(newTasks);
  }
  const baslikveAciklamaDegis =async (yenibaslik, yeniaciklama, id) => {
    //console.log(gonderİd);
    const duzenleme = tasks.map((task) => {
      if (task.id == id) {
        return {
          id: id,
          title: yenibaslik, task: yeniaciklama
        }
      }
      else {
        return task;
      }
    })
    // güncelleme
    var res = await axios.put('http://localhost:3004/tasks/' + id, {
      title: yenibaslik,
      task: yeniaciklama
    })
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
