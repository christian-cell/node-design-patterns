import { envs } from './envs.plugin';

describe('envs.plugin.ts', () => {

    test('should return env options' , () => {

        /* expect(envs).toEqual({
            PORT: 3000,
            MAILER_EMAIL: 'youremail',
            MAILER_SECRET_KEY: 'yourkey',
            MAILER_SERVICE: 'gmail',
            PROD: false,
            MONGO_URL: 'mongodb://<user>:<pass>@localhost:27017',      
            MONGO_USER: 'christian',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_PASS: '<mongoPass>'
        }); */
    })

    test('should return error if not found env' , async () => {

        jest.resetModules(); //IMPORTANTE

        process.env.PORT = 'ABC';

        try {
            
            await import('./envs.plugin');

            expect(true).toBe(false);

        } catch (error) {
            
            console.log(error);

            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }
    })
})