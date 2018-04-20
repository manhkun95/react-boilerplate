const axios = require('axios');

export async function fetchRandomUsers(amount) {
  try {
    const { status: statusCode, data: { results: users } } = await axios.get(`https://randomuser.me/api/?results=${amount}`);
    if (statusCode !== 200) throw new Error();
    else {
      return { users };
    }
  } catch (error) {
    return { error };
  }
}
