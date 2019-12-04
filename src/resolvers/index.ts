import { NonEmptyArray } from 'type-graphql/dist/utils/types';
import { UserCrudResolver } from '../generated/type-graphql';

export default [UserCrudResolver] as
  | NonEmptyArray<Function>
  | NonEmptyArray<string>;
