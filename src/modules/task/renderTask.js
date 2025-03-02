import imgButton from "../../assets/img/task__btn-timer.png";
import imgSpent from "../../assets/img/stopwatch.png";
import imgSpent2 from "../../assets/img/approximation.png";
import { format, hoursLeftUntil, parseISO } from "date-fns";

export function renderTask() {
  if (localStorage.tasks) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const divTaskList = document.querySelector(".tasks__list");

    divTaskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
      const divTaskElement = document.createElement("div");
      divTaskElement.classList.add("task");

      function getPriorityText(priority) {
        switch (priority) {
          case "critical":
            return "Критический";
          case "high":
            return "Высокий";
          case "medium":
            return "Средний";
          case "low":
            return "Низкий";
          default:
            return "Без приоритета"; // на случай, если priority не распознан
        }
      }

      function getRemainingTime(timeDeadline) {
        timeDeadline = new Date(timeDeadline);
        const timeToday = new Date();
        const timeSpent = (timeDeadline - timeToday) / (1000 * 60 * 60 * 24);
        console.log(timeSpent);
        return Math.floor(timeSpent);
      }

      function getDaysDeclension(days) {
        const absDays = Math.abs(days);

        if (absDays % 100 >= 11 && absDays % 100 <= 19) {
          return "дней"; // 11-19 дней
        } else {
          switch (absDays % 10) {
            case 1:
              return "день"; // 1, 21, 31... день
            case 2:
            case 3:
            case 4:
              return "дня"; // 2-4, 22-24... дня
            default:
              return "дней"; // 5-0, 25-30... дней
          }
        }
      }

      function getHoursDeclension(hours) {
        const absHours = Math.abs(hours);

        if (absHours % 100 >= 11 && absHours % 100 <= 19) {
          return "часов"; // 11-19 часов
        } else {
          switch (absHours % 10) {
            case 1:
              return "час"; // 1, 21, 31... час
            case 2:
            case 3:
            case 4:
              return "часа"; // 2-4, 22-24... часа
            default:
              return "часов"; // 5-0, 25-30... часов
          }
        }
      }

      divTaskElement.innerHTML = "";

      divTaskElement.innerHTML = `                    <div class="task__header">
                            <h1 class="task__title">${tasks[i].nameTask}</h1>
                            <div class="task__priority task__priority--high">${getPriorityText(tasks[i].priority)}</div>
                        </div>
                        <progress class="task__progress" value="70" max="100"></progress>
                        <div class="task__end">
                            <div class="task__deadlines"><svg class="task__deadlines-img" xmlns="http://www.w3.org/2000/svg"
                                    width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <g clip-path="url(#clip0_2_1968)">
                                        <path
                                            d="M12.6875 7C12.6875 8.50842 12.0883 9.95506 11.0217 11.0217C9.95506 12.0883 8.50842 12.6875 7 12.6875C5.49158 12.6875 4.04494 12.0883 2.97833 11.0217C1.91172 9.95506 1.3125 8.50842 1.3125 7C1.3125 5.49158 1.91172 4.04494 2.97833 2.97833C4.04494 1.91172 5.49158 1.3125 7 1.3125C8.50842 1.3125 9.95506 1.91172 11.0217 2.97833C12.0883 4.04494 12.6875 5.49158 12.6875 7ZM0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7ZM6.34375 3.28125V7C6.34375 7.21875 6.45312 7.42383 6.63633 7.54688L9.26133 9.29688C9.56211 9.49922 9.96953 9.41719 10.1719 9.11367C10.3742 8.81016 10.2922 8.40547 9.98867 8.20312L7.65625 6.65V3.28125C7.65625 2.91758 7.36367 2.625 7 2.625C6.63633 2.625 6.34375 2.91758 6.34375 3.28125Z"
                                            fill="#6B7280" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_1968">
                                            <path d="M0 0H14V14H0V0Z" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="task__deadlines-text">Срок сдачи - через ${getRemainingTime(tasks[i].deadline)} ${getDaysDeclension(getRemainingTime(tasks[i].deadline))}</span>
                            </div>
                            <div class="task__spent-time">
                                <img class="task__spent-stopwatch" src="${imgSpent}" alt="">
                                <img class="task__spent-approximation" src="${imgSpent2}" alt="">
                                <span class="task__spent-text">${tasks[i].timeSpent} ${getHoursDeclension(tasks[i].timeSpent)} потрачено</span>
                            </div>
                            <button class="task__btn-timer"><img src="${imgButton}" alt="">GO</button>
                        </div>`;

      divTaskList.appendChild(divTaskElement);

      console.log(tasks[i]);
    }
  }
}
