export class APIAccessParameters {

    constructor(
        public actionToApply: (data: any) => any,
        public referenceName: string,
        public characterID: number,
        public referenceFocus: string
    ){}
}