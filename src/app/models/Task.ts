export class Task {
    static nextId = 1;

    constructor(
        public task: string,
        public isCompleted: boolean,
        public category: string,
        public id: number = 0
    ) {
        this.id = id? id : Task.nextId++;
    }
}