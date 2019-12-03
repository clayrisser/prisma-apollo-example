import bcrypt from 'bcrypt';
import { mutationField, stringArg } from 'nexus';

export default mutationField('register', {
  type: 'User',
  args: {
    username: stringArg({ nullable: false }),
    password: stringArg({ nullable: false })
  },
  resolve: async (_parent: any, { username, password }, { photon }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await photon.users.create({
      data: {
        username,
        password: hashedPassword
      }
    });
    return user;
  }
});
