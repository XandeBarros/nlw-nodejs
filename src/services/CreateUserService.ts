import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositeries"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {

  async execute({ name, email, admin } : IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if(!email) {
      throw new Error("Email must be included");
    }

    const userAlreadyExistis = await usersRepositories.findOne({
      email
    });

    if(userAlreadyExistis) {
      throw new Error("User already exists");
    }

    const user = usersRepositories.create({
      name,
      email,
      admin
    });

    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService }