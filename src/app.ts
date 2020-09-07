// autobind decorator
function Autobind(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _target: any,
  // _を使う以外にもtsconfigのnoUnusedParametersの設定で変更できる
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

// ProjectInput class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLTextAreaElement;
  mandayInputElement: HTMLInputElement;
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.formElement = importedNode.firstElementChild as HTMLFormElement;
    this.formElement.id = "user-input";
    this.titleInputElement = this.formElement.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.formElement.querySelector(
      "#description"
    ) as HTMLTextAreaElement;
    this.mandayInputElement = this.formElement.querySelector(
      "#manday"
    ) as HTMLInputElement;
    this.configure();
    this.attach();
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    //submitHandler内でthisが変わらないようにbindする
    this.formElement.addEventListener("submit", this.submitHandler);
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectInput = new ProjectInput();
