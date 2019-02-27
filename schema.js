const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
}= require('graphql');

// Lauch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type:GraphQLString },
    launch_year: { type:GraphQLString },
    launch_date_local: { type:GraphQLString },
    launch_success: { type:GraphQLString },
    rocket: { type: RockeType }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    rocket_id: { type: GraphQLInt },
    rocket_name: { type:GraphQLString },
    rocket_type: { type:GraphQLString }
  })
});

// RootQuery
const RootQuery = new GraphQLObjectType({
  name:"RootQuery"
});

module.exports = new GraphQLObjectType({
  RootQuery
})