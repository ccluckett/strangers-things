const COHORT_NAME = "2303-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//Fetch Post
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

//Register User
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

//Fetch Token

export const login = async (username,password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`,{
      method: "POST",
      headers: {
        'Conent-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};