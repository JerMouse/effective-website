const tokens = {
  's-17206119@stu.nchu.edu.cn':'17206119@stu.nchu.edu.cn',
  't-17206116@stu.nchu.edu.cn':'17206119@stu.nchu.edu.cn',
}
const users = {
  '17206119@stu.nchu.edu.cn': {
    username:'EvanGan',
    password:'123456',
    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    token:'s-17206119@stu.nchu.edu.cn',
    role: ['student']
  },
  '17206116@stu.nchu.edu.cn': {
    username:'小贾',
    password:'123456789',
    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    token:'t-17206116@stu.nchu.edu.cn',
    role: ['teacher']
  }
};

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      console.log(config.body)
      const { userId,password } = config.body;
      console.log(users[userId]['token'])
      const token = users[userId]['token'];
      // mock error
      if (password===users[userId]['password'])
        return {
          code: 20000,
          data: token
        };
      return {
        code: 60204,
        message: 'Account and password are incorrect.'
      }
    }
  },// get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[tokens[token]]
      console.log(config.query)
      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }
      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

