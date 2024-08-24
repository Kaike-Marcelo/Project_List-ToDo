import { Task } from './Task';

export class ListTasksModel {
  private _listTask: Task[] = [];
  private keyListTasks = 'tasks';

  constructor() {
    this.loadTasks();
  }

  public get listTask() {
    return this._listTask;
  }

  public set addTask(task: Task) {
    this._listTask.push(task);
    this.saveListTasks();
  }

  public saveListTasks() {
    // Salva a lista de tarefas no Local Storage do navegador com a chave "tasks"
    localStorage.setItem(this.keyListTasks, JSON.stringify(this._listTask));
  }

  public loadTasks() {
    const tasks = localStorage.getItem(this.keyListTasks);
    // Verifica se há valores no local storage antes de preencher a lista
    this._listTask = tasks ? JSON.parse(tasks) : [];
  }

  deleteTask(id: number): void {
    // Cria uma nova array sem o elemento que possui o 'id' passado por parâmetro.
    this._listTask = this._listTask.filter((task) => task.id !== id);
    this.saveListTasks();
  }

  toggleTask(id: number): void {
    this._listTask = this._listTask.map((task) => {
      if (task.id === id) {
        // Altera o estado do atributo
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    this.saveListTasks();
  }
}
