import { Project, ProjectStatus } from "../models/project.js";
// Project State Management
type Listenner<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listenner<T>[] = [];
  addListener(listenerFn: Listenner<T>) {
    this.listeners.push(listenerFn);
  }
}
export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
    console.log("projectstate");
  }
  //1つのインスタンスしかできないように
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, manday: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      manday,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    //projectのstatusが変更された時に行う
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }
  private updateListeners() {
    for (const listenerFn of this.listeners) {
      //オリジナルの配列を渡すのではなくコピーを渡す（オリジナルの配列を変更しないために）
      listenerFn(this.projects.slice());
    }
  }
}

console.log("実行中・・・・")

export const projectState = ProjectState.getInstance();
