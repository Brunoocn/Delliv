import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/modules/auth/database/repositories/abstract/IUser.repository';
import { IValidateRegisterUserDTO } from './register.dto';
import { hash } from 'bcrypt';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ name, email, password }: IValidateRegisterUserDTO) {
    const userExists = await this.userRepository.findByEmail({
      email,
    });

    if (userExists) {
      throw new Error('Email já cadastrado');
    }

    const hashedPassword = await hash(password, process.env.ROUNDS_OF_HASHING);

    const user = await this.userRepository.createUser({
      name,
      email,
      password,
    });

    return user;
  }
}

