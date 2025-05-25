import { Controller } from '@nestjs/common';
import { FilesService } from './files.service';
import { GrpcMethod } from '@nestjs/microservices';
import { FileInput, FileOutput } from '../generated/src/app';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @GrpcMethod('FilesService', 'ReadFile')
  async readFile(data: FileInput, metadata: Metadata, call: ServerUnaryCall<FileInput, FileOutput>): Promise<FileOutput> {
    return await this.filesService.readFile(data);
  }
}
