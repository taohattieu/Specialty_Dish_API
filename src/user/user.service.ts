import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findByEmail(email: string) {
        throw new Error('Method not implemented.');
    }
    getHello(): string {
        return 'Hello users';
      }
}
