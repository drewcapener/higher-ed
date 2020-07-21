import { ArchiveDocument } from './archive-document';

export class Archive {
    name: string;
    documents: ArchiveDocument[];

    constructor(name: string,
        documents: ArchiveDocument[]) {
            this.name = name;
            this.documents = documents;
    }
}