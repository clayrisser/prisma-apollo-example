import { NonEmptyArray } from 'type-graphql/dist/utils/types';
import {
  UserCrudResolver,
  PostCrudResolver,
  CategoryCrudResolver
} from '../generated/type-graphql';

export default [UserCrudResolver, PostCrudResolver, CategoryCrudResolver] as
  | NonEmptyArray<Function>
  | NonEmptyArray<string>;
