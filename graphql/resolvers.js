
const personTable = {
    name: "youngun",
    age: 34,
    sex: "Male",
}

const resolvers = {
    Query:{
        person: ()=> personTable
    }
}

export default resolvers;