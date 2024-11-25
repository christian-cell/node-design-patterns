import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base:               number;
    limit:              number;
    showTable:          boolean;
    fileName:           string;
    fileDestination:    string;
}

export class ServerApp{

    static async run(options: RunOptions){

        const { base, limit, showTable, fileDestination, fileName } = options || {};

        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile().excute({ 
        
            fileDestination: `${fileDestination}/table-${base}`,
            fileContent: table,
            fileName: fileName
        })

        if(showTable)console.log(table);

        wasCreated ? console.log('file created') : console.error('Error creating file');
    }
}