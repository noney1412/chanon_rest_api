import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolver";
import typeDefs from "./schema";
import userData from "./models";

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema, userData };
