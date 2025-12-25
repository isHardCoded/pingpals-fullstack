import { UserService } from './user.js';
import { LoginUserDto } from '../dto/user/login.js';
import { RegisterUserDto } from '../dto/user/register.js';

export class AuthService {
  constructor(private userService: UserService) {}

  register = async (data: RegisterUserDto) => {
    const existingUser = await this.userService.getUser(data);

    if (existingUser) {
      throw new Error('User alredy exists');
    }

    return await this.userService.create(data);
  };
  login = async (data: LoginUserDto) => {
    const user = await this.userService.getUser(data);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // TODO: сделать проверку пароля, jwt hash
    return user;
  };
}
