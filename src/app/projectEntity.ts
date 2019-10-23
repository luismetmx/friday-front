
export class ProjectEntity {
  id: number;
  name: string;
  solution: number;
  type: string;
  phase: string;

  template: {[taskId: number ]: TaskEntity};
  planTasks: {[taskId: number ]: TaskEntity};

  exeTasks: {[taskId: number ]: ExeTaskEntity};

  addTask(newTask: TaskEntity) {
    let nextNew = 0;
    for (const key in this.planTasks) {
      if (+key < nextNew) {
        nextNew = +key;
      }
    }
    nextNew--;
    newTask.id = nextNew;
    this.planTasks[nextNew] = newTask;
  }

  hasTask(taskId: number): boolean {
    return taskId in this.planTasks;
  }

  templateTasksNotInPlan(): TaskEntity[] {
    const notPlanned: TaskEntity[] = [];
    for (const key in this.template) {
      if (!this.hasTask(+key)) {
        notPlanned.push(this.template[key]);
      }
    }
    return notPlanned;
  }

  getTemplateList(): TaskEntity[] {
    const tasks: TaskEntity[] = [];
    for (const key in this.template) {
      if (this.template.hasOwnProperty(key)) {
      const val = this.template[+key];
      tasks.push(val);
      }
    }
    return tasks;
  }

  removeTask(taskID: number) {
    const etask = this.exeTaskByTaskId(taskID);
    if (etask !== null) {
      delete this.exeTasks[etask.id];
    }
    delete this.planTasks[taskID];
  }

  updateTask(task: TaskEntity) {
    if (task.id > 0) {
      if (!task.Equivalent(this.planTasks[task.id])) {
        const oldTask = this.planTasks[task.id];
        delete this.planTasks[task.id];
        this.addTask(task);
        const etask = this.exeTaskByTaskId(oldTask.id);
        if (etask !== null) {
          etask.taskId = task.id;
        }
      }
    } else {

    }
  }

  exeTaskByTaskId(taskID: number): ExeTaskEntity | null {
    let etask = null;
    for (const key in this.exeTasks) {
      if (this.exeTasks.hasOwnProperty(+key)) {
        const value = this.exeTasks[+key];
        if (value.taskId === taskID) {
          etask = value;
        }
      }
    }
    return etask;
  }
}

export class TaskEntity {
  id: number;
  name: string;
  teamId: number;
  phase: string;
  solutionId: number;
  projectType: string;
  active: boolean;

  Equivalent(otherTask: TaskEntity): boolean {
    return (
      ((this.id < 0) || (otherTask.id < 0) || (this.id === otherTask.id)) &&
      (this.name === otherTask.name) &&
      (this.teamId === otherTask.teamId) &&
      (this.phase === otherTask.phase) &&
      (this.solutionId === otherTask.solutionId) &&
      (this.projectType === otherTask.projectType)
      );
  }
}

export class ExeTaskEntity {
  id: number;
  comments: string;
  targetDate: Date;
  complDate: Date;
  taskId: number;
  projectID: number;
  resourceID: number;
}

export class ResourceEntity {
  id: number;
  name: string;
  email: string;
  teamId: number;
}
