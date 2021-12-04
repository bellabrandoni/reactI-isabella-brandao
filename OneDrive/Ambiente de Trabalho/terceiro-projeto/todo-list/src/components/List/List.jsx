import { useState } from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';
import '../List/ListStyle.css';

export const List = () => {

    const [list, setList] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleCreateNewTask = () => {
        const task = {
            id: Math.random(),
            title: newTask,
            isComplete: false
        }

        if(task.title === '') {
            return
        }

        setList([...list, task])
        setNewTask('')
    }

    const handleRemoveTask = (id) => {
        const taskFiltered = list.filter(task => task.id !== id)
        setList(taskFiltered)
    }

    return (
        <>
        <section className="list">
            <header>
                <h2>Tarefas a Fazer:</h2>
                <div className="input-container">
                    <input 
                    type="text"
                    placeholder="Adicionar nova tarefa"
                    onChange={(e) => {setNewTask(e.target.value)}}
                    value={newTask}
                    /> 
                    <button 
                    type="submit" 
                    className="add-task" 
                    data-testid="add-task"
                    onClick={handleCreateNewTask}
                    
                    >
                    <FiPlus size={16} color='#fff'/>
                    </button>
                </div>
            </header>
            
            <main>
                <ul>
                    {list.map(task => 
                        <li data-testid="task" key={task.id}>
                            <div className={task.isCompleted ? 'completed' : ''} data-testid="task">
                            <label>
                                <input 
                                type="checkbox"
                                checked={task.isComplete}
                                onClick={() => {}}
                                readOnly
                                />
                                <span className="checkmark"></span>
                            </label>
                            <p> {task.title} </p>
                            </div>
                            <button 
                            className="remove-task" 
                            type="button"
                            data-testing="remove-task"
                            onClick={() => handleRemoveTask(task.id)}
                            >
                            <FiTrash size= {16}/>
                            </button>
                        </li>

                    )}
                </ul>
            </main>

        </section>
        </>
    )
}