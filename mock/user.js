const tokens = {
  common: {
    token: 'common-token'
  }, teacher: {
    token: 'teacher-token'
  }, '123456': {
    token: 'student-token'
  }
};

const users = {
  'student-token': {
    userId: '123456',
    username:'123456',
    password:'123456',
    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    role: ['student']
  }
};

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      console.log(config.body)
      const { userId } = config.body;
      const token = tokens[userId];
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }
      return {
        code: 20000,
        data: token
      }
    }
  },// get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

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

