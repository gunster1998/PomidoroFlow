import { Task } from "./storageManager"
import {renderTask} from './renderTask'

export function renderFormTask() {
    const addNewTaskElement = document.createElement('div')
    const taskList = document.querySelector('.tasks__list')

    function addButtonFormTask() {

        addNewTaskElement.classList.add('new-task')
        addNewTaskElement.innerHTML =
            `<div class="new-task__title">Добавить новую задачу</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <path
                                    d="M22.4286 3.34375C22.4286 1.71895 21.1199 0.40625 19.5001 0.40625C17.8802 0.40625 16.5715 1.71895 16.5715 3.34375V16.5625H3.39293C1.77306 16.5625 0.464355 17.8752 0.464355 19.5C0.464355 21.1248 1.77306 22.4375 3.39293 22.4375H16.5715V35.6562C16.5715 37.2811 17.8802 38.5938 19.5001 38.5938C21.1199 38.5938 22.4286 37.2811 22.4286 35.6562V22.4375H35.6072C37.2271 22.4375 38.5358 21.1248 38.5358 19.5C38.5358 17.8752 37.2271 16.5625 35.6072 16.5625H22.4286V3.34375Z"
                                    fill="#6B7280" />
        </svg>`

        addNewTaskElement.addEventListener('click', addFormTask);

    }

    function addFormTask(event) {
        console.log('Обновляем форму')
        event.stopPropagation();
        //Убираю событие
        addNewTaskElement.removeEventListener('click', addFormTask);

        addNewTaskElement.innerHTML = '';
        addNewTaskElement.innerHTML = `                    <form class="new-task__form" style="width: 100%;" action="">
                        <div class="new-task__start">
                            <label class="nameTaskLabel" for="nameTaskInput">Название:</label>
                            <input name = "nameTask" id="nameTaskInput" type="text" required>
                            <label class="priorityTaskLabel" for="priorityTaskInput">Приоритет:</label>
                            <select id="priorityTaskInput" name="priority" required>
                                <option value="critical">🔥 Критический</option>
                                <option value="high">⚡ Высокий</option>
                                <option value="medium">🟡 Средний</option>
                                <option value="low">🟢 Низкий</option>
                                <option value="none">⚪ Без приоритета</option>
                            </select>
                        </div>

                        <div class="new-task__main">
                            <label class="deadlineTaskLabel" for="deadlineTaskInput">Дедлайн:</label>
                            <input name="deadlineTask" id="deadlineTaskInput" type="date" required>
                        </div>

                        <div class="new-task__end">
                            <button class="new-task__end-button">
                                <svg class="new-task__end--icon" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                    <path d="M0 0H14V16H0V0Z" stroke="#E5E7EB"/>
                                    <path d="M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z" fill="white"/>
                                  </svg>
                                Добавить
                            </button>
                        </div>
                        <button class="new-task__close"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <g clip-path="url(#clip0_2327_472)">
                              <path d="M7.91724 6.33691C7.53456 5.93753 6.90273 5.92403 6.50335 6.30671C6.10397 6.68939 6.09047 7.32122 6.47315 7.7206L9.58646 10.9698L6.33726 14.0831C5.93788 14.4658 5.92438 15.0976 6.30706 15.497C6.68974 15.8964 7.32157 15.9099 7.72095 15.5272L10.9702 12.4139L14.0835 15.6631C14.4661 16.0625 15.098 16.076 15.4974 15.6933C15.8967 15.3106 15.9102 14.6788 15.5276 14.2794L12.4142 11.0302L15.6634 7.91689C16.0628 7.53421 16.0763 6.90238 15.6936 6.50299C15.311 6.10361 14.6791 6.09012 14.2797 6.4728L11.0305 9.58611L7.91724 6.33691Z" fill="#6B7280"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_2327_472">
                                <path d="M0.411133 10.0665L10.5198 0.380676L21.5893 11.9334L11.4807 21.6192L0.411133 10.0665Z" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg></button>
    </form>`;
    const closeButton = addNewTaskElement.querySelector('.new-task__close')
    const formAddTask = addNewTaskElement.querySelector('.new-task__form')

    closeButton.addEventListener('click', (event) => {
        event.stopPropagation();


        addButtonFormTask();
    })

    formAddTask.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)

        const nameTask = formData.get('nameTask')
        const priorityTask =formData.get('priority')
        const deadlineTask = formData.get('deadlineTask')

        const newTask = new Task(nameTask,priorityTask,deadlineTask)

        console.log(newTask)

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.push(newTask)

        localStorage.setItem('tasks',JSON.stringify(tasks))
        renderTask();
        renderFormTask();
        console.log(tasks)

    })

    }
    addButtonFormTask();
    taskList.appendChild(addNewTaskElement);
}

export function renderInputFormTask() {

}