// A A A arrange , act, assert

import { httpClientPlugin } from "../../src/plugins/http-client.plugin"


describe( 'plugins/http-client.plugin.ts' , () => {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    it('httpClientPlugin.get() should return a string' , async () => {

        const data = await httpClientPlugin.get(url);

        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        })

        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
        })
    })

    it('httpClientPlugin should have POST,PUT and Delete methods', async () => {

        // const postMethod = await httpClientPlugin.post(url , {});


        expect(typeof(httpClientPlugin.post)).toBe('function');
        expect(typeof(httpClientPlugin.put)).toBe('function');
        expect(typeof(httpClientPlugin.delete)).toBe('function');
        expect(typeof(httpClientPlugin.get)).toBe('function');
    })
})