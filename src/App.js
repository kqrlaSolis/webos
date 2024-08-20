import React, { useState } from "react"; // Importamos React y useState desde 'react'
import "./App.css"; // Importamos los estilos del archivo App.css

function App() {
  // Definimos el componente principal App

  const [tasks, setTasks] = useState([
    {
      task: "Learn React", // Tarea 1
      description: "Learn the basics of React",
      date: "Aug-20",// Descripción de la tarea 1
      isCompleted: false, //TODO: Agregar el codigo para que se pueda marcar como completada
    },
    {
      task: "webos",
      description: 'con jamon',
      date: "Aug-20",
      isCompleted: true,
    }
  ]); 
  // useState para manejar la lista de tareas
  const [newTask, setNewTask] = useState("algo"); // useState para manejar la nueva tarea
  const [newDescription, setNewDescription] = useState("cola"); // useState para manejar la descripción de la nueva tarea
  const [editIndex, setEditIndex] = useState(-1);
  const [newDate, setNewDate] = useState(""); // useState para manejar el índice de la tarea que se está editando, -1 significa que no se está editando porque en JS los índices empiezan en 0

  // Función para manejar el cambio en el input de tarea
  const handleTaskChange = (e) => {
    //e.target.value | Obtiene el valor del input
    setNewTask(e.target.value); // Actualiza el estado 'newTask' con el valor del input de tarea
  };

  // Función para manejar el cambio en el input de descripción
  const handleDescriptionChange = (e) => {
    //e.target.value | Obtiene el valor del input
    setNewDescription(e.target.value); // Actualiza el estado 'newDescription' con el valor del input de descripción
  };


  const handleDateChange = (e) => {

    setNewDate(e.target.value);
  };








  // Función para agregar o editar una tarea
  const handleAddOrEditTask = () => {
    // Verifica que los campos no estén vacíos
    if (newTask.trim() !== "" && newDescription.trim() !== "") {
      // .trim() elimina los espacios en blanco al inicio y al final de una cadena
      // Si no estamos editando, agregamos una nueva tarea
      if (editIndex === -1) {
        // Agrega la nueva tarea al array de tareas
        // los tres puntos (...) se utilizan para copiar el array de tareas existente y agregar la nueva tarea al final
        setTasks([...tasks, { task: newTask, description: newDescription, date:newDate, isCompleted:false }]);
      } else {
        // Si estamos editando, actualizamos la tarea existente
        //.map recorre cada elemento del array y devuelve un nuevo array con los elementos modificados
        const updatedTasks = tasks.map((item, index) => {
          if (index === editIndex) {
            return { task: newTask, description: newDescription, date:newDate, isCompleted:item.isCompleted};
          } else {
            return item;
          }
        });
        setTasks(updatedTasks);
        setEditIndex(-1); // Reiniciamos el índice de edición
      }
      setNewTask(""); // Limpia el input de tarea después de agregarla o editarla
      setNewDescription(""); // Limpia el input de descripción después de agregarla o editarla
    }
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (index) => {
    // Filtra las tareas para eliminar la tarea seleccionada. Se utiliza .filter() que crea un nuevo array sin la tarea que queremos eliminar.
    // filter() recorre cada elemento del array y solo mantiene los elementos que cumplen con la condición especificada.
    const updatedTasks = tasks.filter((item, i) => i !== index);
    setTasks(updatedTasks); // Actualiza la lista de tareas sin la tarea eliminada
  };

  // Función para seleccionar una tarea para editar
  const handleEditTask = (loquequieras) => {
    setEditIndex(loquequieras); // Establece el índice de la tarea que se va a editar
    setNewTask(tasks[loquequieras].task); // Llena el input de tarea con el valor de la tarea seleccionada
    setNewDescription(tasks[loquequieras].description); // Llena el input de descripción con el valor de la descripción seleccionada
  };

  // Función para marcar una tarea como completada
  const handleToggleComplete = (index) => {
    const updatedList = tasks.map((tarea,posicion)=> {
      if (posicion !== index) return tarea;
      console.log(posicion, tarea);
      return {
        task:tarea.task, // Tarea 1
        description:tarea.description,
        date:tarea.date, // Descripción de la tarea 1
        isCompleted:!tarea.isCompleted, 
      }
    })
    console.log(updatedList);
    setTasks(updatedList);
    

    // Queremos actualizar la lista de tareas cuando se marca una tarea como completada.
    // Primero, usamos el método map para crear una nueva lista de tareas. ¿Recuerdas cómo funciona el método map?
    //TODO: Agregar el código para marcar una tarea como completada
  };

  return (
    <div className="App">
      {/* Contenedor principal */}
      <header className="App-header">
        {/* Encabezado de la aplicación */}
        <h1>ToDo List</h1>
        <h2> { editIndex }</h2>

        {/* Input para agregar o editar una tarea */}
        <input
          type="text"
          value={newTask}
          onChange={handleTaskChange}
          placeholder="Add or edit task"
        />

        {/* Input para agregar o editar la descripción de una tarea */}
        <input
          type="text"
          value={newDescription}
          onChange={handleDescriptionChange}
          placeholder="Add or edit description"
        />

        <input
          type="date"
          value={newDate}
          onChange={handleDateChange}
          placeholder="Date"
          />


        {/* Botón para agregar o editar la tarea */}
        <button className="primary" onClick={handleAddOrEditTask}>
          {editIndex === -1 ? "Add Task" : "Update Task"}
        </button>

        {/* Tabla para mostrar la lista de tareas */}
        <table>
          <thead>
            <tr>
              <th>#</th> {/* Columna para el número de tarea */}
              <th>Task</th> {/* Columna para la descripción de la tarea */}
              <th>Description</th>
              <th>Date</th>
              {/* Columna para la descripción de la tarea */}
              <th>Completed</th> {/* Columna para la descripción de la tarea */}
              <th>Actions</th>
              <th>webos</th>
              {/* Columna para las acciones de editar o eliminar */}
            </tr>
          </thead>
          <tbody>
            {/* Mapeamos las tareas para mostrarlas en la tabla */}
            {tasks.map((item, i) => (
              <tr key={i}>
                <td>{i}</td> {/* Muestra el número de tarea */}
                <td>{item.task}</td> {/* Muestra la descripción de la tarea */}
                <td>{item.description}</td>
                <td>{item.date}</td>
                {/* Muestra la descripción de la tarea */}
                {/*TODO: Agregar otro <td></td> para mostrar si esta completada la tarea */}
                <td>{item.isCompleted ? 'ok' : 'no ok'}</td>
                <td>
                  {/* Botón para marcar una tarea como completada */}
                  <button className= {item.isCompleted ? 'warn' : 'success'}  onClick={() => handleToggleComplete(i)}>
                    {
                      item.isCompleted ? 'Undo' : 'Complete'
                    }
                  </button>
                  {/* Botón para editar la tarea */}
                  <button className="primary" onClick={() => handleEditTask(i)}>Edit</button>
                  {/* Botón para eliminar la tarea */}
                  <button className="danger" onClick={() => handleDeleteTask(i)}>
                    Delete
                  </button>
                </td>
                <td>webos</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App; // Exportamos el componente App para que pueda ser usado en otros archivos
