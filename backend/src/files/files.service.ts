import { Injectable } from '@nestjs/common';
import { FileInput, FileOutput } from 'src/generated/src/app';

@Injectable()
export class FilesService {
  async readFile(payload: FileInput): Promise<FileOutput> {
    return {
      data: Buffer.from('Hello, world!'),
      error: {
        code: 0,
        message: 'Success',
      },
    };
  }
}
