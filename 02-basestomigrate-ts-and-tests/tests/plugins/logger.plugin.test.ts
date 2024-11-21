import { buildLogger } from '../../src/plugins';
import { logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.ts', () => {

    it('buildLogger should return a function logger', () => {

        const logger = buildLogger('test');

        expect( typeof logger.log ).toBe('function');
        expect( typeof logger.error ).toBe('function');
    })

    it('logger.log should log a message', () => {

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service'

        const logger = buildLogger(service);

        logger.log(message);

        expect( winstonLoggerMock ).toHaveBeenCalledWith(

            /* estamos evaluando que winston venga con estas propiedades */

            'info',
            expect.objectContaining(
                {
                    level: 'info',
                    message,
                    service,
                }
            )
            
        );
    })
})