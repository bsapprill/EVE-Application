export class CharacterData {

    constructor (
        public CharacterID: number,
        public CharacterName: string,
        public CharacterIsAdmin: boolean = false,
        public CharacterSP: number
    ) {}
}