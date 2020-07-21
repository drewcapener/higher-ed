export class Archive {
    name: string;
    documents: any[];

    constructor(name: string,
        documents: any[]) {
            this.name = name;
            this.documents = documents;
    }
}