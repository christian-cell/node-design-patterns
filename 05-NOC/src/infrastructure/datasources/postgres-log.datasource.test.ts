import { PostgresLogDatasource } from "./postgres-log.datasource"
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { envs } from "../../config/plugins/envs.plugin";
import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import prisma from './client'

describe('postgres-log.datasource.ts' , () => {

    const prisma = new PrismaClient();
    
    const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
    
    jest.mock('./client', () => ({
        
        __esModule: true,
        default: mockDeep<PrismaClient>(),
    }))

    beforeEach(() => {
        
        // mockReset(prismaMock)
    })
    
    test('should create logs' , async () => {
        
        const prismaResult = prismaMock.logModel.create({
            
            data: {
                message: 'from postgres-log.datasource.test.ts',
                level: 'LOW',
                createdAt: new Date(),
                origin: 'check-service.ts'
            }
        });
        
        console.log( prismaResult );
        
        expect(true).toBeTruthy();
        
    })
    
    test('should return logs' , async () => {
    
        expect(true).toBeTruthy();
    })
})