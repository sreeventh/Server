const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const { Sequelize } = require("sequelize");
const server = new ApolloServer({ typeDefs, resolvers });
const { User } = require("./sql_helper/models");

server.listen().then(({ url }) => {
    console.log(`server is listening to: ${url}`);
});

User.sync({ alter: true }).then(() => {
    // console.log("Synced Successfully!");
    // const u1 = User.build({ username: "Sree", password: '123', age: 21 });
    // u1.username = "Sreeventh";
    // return u1.save();
    // return User.create({
    //     uid: 1,
    //     name: "Sreeventh Srinivasan",
    //     username: "ZEINT_15",
    //     admin: true,
    //     password: "1234567890",
    // })
}).catch((err) => {
    console.log(err + ' : Error Syncing!');
});