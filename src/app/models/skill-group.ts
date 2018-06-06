import { Skill } from "./skill";

export class SkillGroup {
    constructor(
        public name: string,
        public childSkills: Skill[]
    ){}
}