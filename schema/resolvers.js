// const { user_data } = require("../sample_data");
const {User} = require("../sql_helper/models");

const resolvers = {
    Query: {
        // to get all posts
        users: async () => {
            return await User.findAll();
        }
    },
    Mutation: {
        // sign in new user
        newUser: async (parent, args) => {
            const userInp = args.input;
            // const lastId = user_data[user_data.length - 1].uid;
            // userInp.uid = lastId + 1;
            // userInp.admin = false;
            // user_data.push(userInp);
            // return userInp;
            return await User.create({
                name: userInp.name,
                username: userInp.username,
                admin: false,
                password: userInp.password,
            });
        }
    }
}

module.exports = { resolvers };