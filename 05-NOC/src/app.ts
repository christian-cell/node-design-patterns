import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server"

(async () => {

    main();
})()

async function main(){

    // console.log( envs );

    /* console.log({prod : process.env.PROD}); */

    await MongoDatabase.connect({

        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    });

    const prisma = new PrismaClient();

    const newLog = await prisma.logModel.create({
        
        data: {
            level: 'HIGH',
            message: 'text message',
            origin: 'App.ts'
        }
    })

    console.log( newLog );

    //crear una coleccion = tables, documento = registro

    const newMongoLog = await LogModel.create({

        message: 'Test message from mongo',
        origin: 'App.ts',
        level: 'low'
    })

    const prismaLogs = await prisma.logModel.findMany({

        where: { level: 'HIGH' }
    });

    console.log('prismaLogs : ' ,prismaLogs);

    // await newMongoLog.save();

    console.log(newMongoLog);

    const mongoLogs = await LogModel.find();

    console.log( 'mongoLogs : ' , mongoLogs );
    
    // console.log(logs[2].message);

    Server.start();
}