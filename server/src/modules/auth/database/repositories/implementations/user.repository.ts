import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ICreateUser, IFindUserByEmail } from '../abstract/userRepository.dto';
import { User } from '@prisma/client';
import { IUserRepository } from '../abstract/IUser.repository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail({ email }: IFindUserByEmail): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    return user;
  }

  async createUser(data: ICreateUser): Promise<User> {
    const newUser = await this.prismaService.user.create({
      data,
    });

    return newUser;
  }
}

