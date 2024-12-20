import { Exercise } from "./main";
import { writeFile } from "fs/promises";

type ExerciseObj = { character: string; translation: string };

class Revision {
  characters: ExerciseObj[] = [];

  constructor() {}

  add(exercise: ExerciseObj) {
    this.characters.push(exercise);
  }

  async store() {
    const revision = await require("./data/revision.json");
    revision.push(...this.characters);
    writeFile("./data/revision.json", JSON.stringify(revision, null, 2));
  }
}

export default Revision;
