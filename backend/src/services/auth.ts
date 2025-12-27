import { UserService } from './user.js';
import { LoginUserDto } from '../dto/user/login.js';
import { RegisterUserDto } from '../dto/user/register.js';
import { AppError } from '../errors/app.js';

export class AuthService {
  constructor(private userService: UserService) {}

  register = async (data: RegisterUserDto) => {
    return this.userService.create(data);
  };

  login = async (data: LoginUserDto) => {
    const user = this.userService.getUser(data);

    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    // TODO: сделать проверку пароля, jwt hash
    return user;
  };
}
