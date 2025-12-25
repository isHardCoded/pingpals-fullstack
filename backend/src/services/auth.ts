import { UserService } from './user.js';
import { LoginUserDto } from '../dto/user/login.js';
import { RegisterUserDto } from '../dto/user/register.js';
import { AppError } from '../errors/app.js';

export class AuthService {
  constructor(private userService: UserService) {}

  register = async (data: RegisterUserDto) => {
    const existingUser = await this.userService.getUser(data);

    if (existingUser) {
      throw new AppError('User already exists', 409);
    }

    return await this.userService.create(data);
  };
  login = async (data: LoginUserDto) => {
    const user = await this.userService.getUser(data);

    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    // TODO: сделать проверку пароля, jwt hash
    return user;
  };
}
