import { mergeResolvers } from 'graphql-tools';

import IntakeFormResolver from './forms/intake-form/resolver';

const resolvers = [IntakeFormResolver];

export default mergeResolvers(resolvers, { all: true });
