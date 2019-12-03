import { objectType } from 'nexus';

export default objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.password();
  }
});
