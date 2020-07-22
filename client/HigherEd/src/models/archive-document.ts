export class ArchiveDocument {

    title: string;
    content: any;
    description: string;

    constructor(title: string,
        content: any, description: string) {
            this.title = title;
            this.content = content;
            this.description = description;
    }

}