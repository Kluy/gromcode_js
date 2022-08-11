class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = users;
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((elem) => elem._name);
  }
  getUserIds() {
    return this._users.map((elem) => elem._id);
  }
  getUserNameById() {
    return this._users.find((elem) => elem._id)._name;
  }
}

const user = new User(1, 'a', 3);
const user2 = new User(2, 'b', 4);
const user3 = new User(3, 'c', 5);

const arr = [user, user2, user3];

const rep = new UserRepository(arr);
console.log(user);
console.log(user.id);
console.log(user.name);

user.name = 'f';
console.log(user.name);
console.log(user.sessionId);
console.log(rep.getUserNames());
console.log(rep.getUserIds());
console.log(rep.getUserNameById());
