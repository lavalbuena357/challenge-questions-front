export const services = {
  getUsers: {
    url: process.env.REACT_APP_API_URL_BASE + '/users',
    method: 'GET'
  }, 

  addUser: {
    url: process.env.REACT_APP_API_URL_BASE + '/users',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: {
      name: "user",
      accum: 0,
      level_reached: 1
    }
  },

  updatedUser: {
    url: process.env.REACT_APP_API_URL_BASE + '/users',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: {
      name: "user",
      accum: 0,
      level_reached: 1
    }
  },
  
  getLevels: {
    url: process.env.REACT_APP_API_URL_BASE + '/levels',
    method: 'GET'
  }, 

  addHistory: {
    url: process.env.REACT_APP_API_URL_BASE + '/history',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
  },

  getHistory: {
    url: process.env.REACT_APP_API_URL_BASE + '/history',
    method: 'GET', 
  },
 
}