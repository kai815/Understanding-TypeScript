namespace App {
  // ProjectStatus
  export enum ProjectStatus {
    Active,
    Finished,
  }

  // Project
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public manday: number,
      public status: ProjectStatus
    ) {}
  }
}
