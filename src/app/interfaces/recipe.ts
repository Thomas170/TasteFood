import {Step} from "./step";

export interface Recipe {
  id: number,
  title: string,
  image: string,
  description: string,
  author: string,
  ingredients: string[],
  steps: Step[],
}
