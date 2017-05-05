import { Module } from 'nest.js';
import { MathController } from './math.controller';

@Module({
    controllers: [ MathController ]
})
export class MicroserviceModule {}
