import Mock from "mockjs";
let users = [];
for (let i = 0; i < 10; i++) {
  users.push(
    Mock.mock({
      userName: Mock.Random.cname(),
      age: Mock.Random.integer(12, 80),
      email: Mock.Random.email(),
      address: Mock.Random.county(true),
    })
  );
}
//  变量名与apiList的name保持一致
const getUsers = {
  code: 200,
  data: users,
};
const addUser = () => {
  let user = {
    userName: Mock.Random.cname(),
    age: Mock.Random.integer(12, 80),
    email: Mock.Random.email(),
    address: Mock.Random.county(true),
  };
  users.push(user);
  return {
    code: 200,
    data: users,
  };
};
const updateUser = () => {
  let i = users.length;
  let user = {
    userName: Mock.Random.cname(),
    age: Mock.Random.integer(12, 80),
    email: Mock.Random.email(),
    address: Mock.Random.county(),
  };
  users[i - 1] = user;
  return {
    code: 200,
    data: users,
  };
};
const delUser = () => {
  let i = users.length;
  users.splice(i - 1, 1);
  return {
    code: 200,
    data: users,
  };
};
export const test = {
  getUsers,
  addUser,
  delUser,
  updateUser,
};
