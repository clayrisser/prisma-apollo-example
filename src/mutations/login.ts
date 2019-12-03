import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { mutationField, stringArg, objectType } from 'nexus';

export default mutationField('login', {
  type: objectType({
    name: 'LoginResponse',
    definition(t) {
      t.string('token');
    }
  }),
  args: {
    username: stringArg({ nullable: false }),
    password: stringArg({ nullable: false })
  },
  resolve: async (_parent: any, { username, password }, { photon }) => {
    const user = await photon.users.findOne({ where: { username } });
    if (!user) throw new Error('invalid login');
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error('invalid login');
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username
      },
      'some-secret',
      { expiresIn: '30d' }
    );
    return {
      token
    };
  }
});
