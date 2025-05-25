import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HealthImplementation, protoPath as healthCheckProtoPath } from 'grpc-health-check';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      protoPath: [
        healthCheckProtoPath,
        join(__dirname, 'app.proto'),
      ],
      url: '0.0.0.0:50051',
      package: 'app',
      loader: {
        defaults: true,
      },
      onLoadPackageDefinition: (pkg: any, server: any) => {
        const healthImpl = new HealthImplementation({
          '': 'UNKNOWN',
        });

        healthImpl.addToServer(server);
        healthImpl.setStatus('', 'SERVING');
      },
    },
  });

  await app.listen();
}
bootstrap().catch(console.error);
