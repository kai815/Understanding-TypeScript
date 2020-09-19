/// <reference path="base-component.ts" />

namespace App {
  // ProjectItem Class
  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable {
    private project: Project;

    get manday() {
      if (this.project.manday < 20) {
        return this.project.manday.toString() + "人日";
      } else {
        return (this.project.manday / 20).toString() + "人月";
      }
    }
    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false, project.id);
      this.project = project;
      this.configure();
      this.renderContent();
    }

    @Autobind
    dragStartHandler(event: DragEvent) {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }
    @Autobind
    dragEndHandler(_event: DragEvent) {
      console.log("Drag End");
    }

    configure() {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.element.querySelector("h2")!.textContent = this.project.title;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.element.querySelector("h3")!.textContent = this.manday; //this.mandayでgetter関数が実行される
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.element.querySelector("p")!.textContent = this.project.description;
    }
  }
}
