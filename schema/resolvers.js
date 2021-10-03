const { UserList,MovieList } = require('../fakeData')
const _ = require('lodash');

const resolvers = {
    Query: {
        //  USER RESOVLERS
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            //Database in here
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        //  MOVIE RESOVLERS
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            movieName = args.name;
            const movie = _.find(MovieList, { name: movieName });
            return movie;
        },
    },
    User: {
        favouriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication > 2000 && movie.yearOfPublication <= 2010 )
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const {id, username} = args.input;
            let userUpdate;
            UserList.forEach(user => {
                if (user.id == id){
                    user.username = username;
                    userUpdate = user;
                }
            })            
            return userUpdate;
        },
        updateNationality: (parent, args) => {
            const { id,nationality } = args.input;
            let userUpdate;
            UserList.forEach(user => {
                if(user.id === Number(id)){
                    user.nationality = nationality;
                    userUpdate = user;
                }
            })
            return userUpdate;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
        }
    }
};

module.exports = { resolvers };