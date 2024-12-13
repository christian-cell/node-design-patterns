// A A A arrange , act, assert

import { getUUID } from "../../src/plugins"

describe( 'plugins/get-id.plugin.ts' , () => {

    it('should return a UUID' , () => {

        const uuid = getUUID();

        expect(typeof(uuid)).toBe('string');
        
        //UUID has length of 36 characteres
        expect(uuid.length).toBe(36);
    })
})