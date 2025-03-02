import { v4 as uuidv4 } from "uuid";

export class Task {
  constructor(nameTask, priority, deadline) {
    this.id = uuidv4();
    this.nameTask = nameTask;
    this.priority = priority;
    this.deadline = deadline;
    this.dateCreation = new Date();
    this.timeSpent = 0;
  }
}
