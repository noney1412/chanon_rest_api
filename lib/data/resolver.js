export default {
  Query: {
    callName: async (parent, args, { userData }) => {
      const alluser = await userData.find();
      return alluser.map(x => {
        return x;
      });
    }
  },

  Mutation: {
    createUser: async (parent, args, { userData }) => {
      const newuser = await new userData(args).save();
      return newuser;
    }
  }
};
