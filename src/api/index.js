const COHORT_NAME = "2303-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const fakeData = {
  success: true,
  error: null,
  data: {
    posts: [
      {
        location: "[On Request]",
        willDeliver: false,
        messages: [],
        active: true,
        _id: "642762a8cd3bfb001620064e",
        author: {
          _id: "642762a8cd3bfb0016200648",
          username: "joe1234",
        },
        cohort: "642762a8cd3bfb0016200646",
        title: "Practically new Stradivarius",
        description:
          "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
        price: "$14.3 million",
        createdAt: "2023-03-31T22:46:00.837Z",
        updatedAt: "2023-03-31T22:46:00.880Z",
        __v: 0,
        isAuthor: false,
      },
      {
        location: "[On Request]",
        willDeliver: true,
        messages: [],
        active: true,
        _id: "642762a8cd3bfb001620064f",
        author: {
          _id: "642762a8cd3bfb0016200649",
          username: "jane1234",
        },
        cohort: "642762a8cd3bfb0016200646",
        title: "Golden Retriever puppies",
        description:
          "Not looking for any money, just want to find a good home for these four beautiful pups.",
        price: "free",
        createdAt: "2023-03-31T22:46:00.837Z",
        updatedAt: "2023-03-31T22:46:00.886Z",
        __v: 0,
        isAuthor: false,
      },
      {
        location: "Ames, IA",
        willDeliver: true,
        messages: [],
        active: true,
        _id: "642762a8cd3bfb0016200650",
        author: {
          _id: "642762a8cd3bfb001620064a",
          username: "caesar1234",
        },
        cohort: "642762a8cd3bfb0016200646",
        title: "NordicTrack Freestrider Elliptical Trainer",
        description: "To be honest, it is more amazing than my resolve.",
        price: "$1400, OBO",
        createdAt: "2023-03-31T22:46:00.837Z",
        updatedAt: "2023-03-31T22:46:00.891Z",
        __v: 0,
        isAuthor: false,
      },
    ],
  },
};

//Fetch Post
export const fetchPosts = async () => {
  try {
    // const response = await fetch(`${BASE_URL}/posts`);
    // const { data } = await response.json();
    const { data } = fakeData;
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

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Conent-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
