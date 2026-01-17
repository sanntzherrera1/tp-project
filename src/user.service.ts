import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }

  // A comment about the new methods added to the UserService class.

  getUserInfo(): { name: string; age: number } {
    return { name: 'John Doe', age: 30 };
  }

  getTestData(): string[] {
    return ['data1', 'data2', 'data3'];
  }
}
