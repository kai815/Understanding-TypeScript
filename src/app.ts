//ブラウザでimportをする時は.js必要 webpackなどを使う時は拡張子不要
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
