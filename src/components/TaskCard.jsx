import { useContext } from 'react';
import {TaskContext} from '../context/TaskContext'

const TaskCard = ({task}) => {
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className='bg-gray-800 text-white p-3 rounded'>
            <h1 className='text-lg font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-300 text-sm'> - {task.description}</p>
            <div className='text-right'>
                <button onClick={ () => deleteTask(task.id)} className='text-white bg-red-500 hover:bg-red-600 hover:text-white py-2 px-2 rounded text-sm mt-3'>Eliminar</button>
            </div>
        </div>
    );
};

export default TaskCard;