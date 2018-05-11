export class APIAccessParameters {

    constructor(
        public actionToApply: (data: any) => any,
        public referenceName: string,
        public referenceFocus: string
    ){}
}