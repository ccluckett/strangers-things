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
    console.log(data);
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

//Get userData
const userData = {
  posts: [
    {
      location: "[On Request]",
      willDeliver: false,
      messages: [
        {
          _id: "5e8d1f2539e7a70017a7c968",
          fromUser: {
            _id: "5e8d1f2539e7a70017a7c962",
            username: "jane1234",
          },
          content: "I am very much in the market for a fine violin.",
        },
      ],
      active: true,
      _id: "5e8d1f2539e7a70017a7c964",
      author: "5e8d1f2539e7a70017a7c961",
      title: "Practically new Stradivarius",
      description:
        "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
      price: "$14.3 million",
      createdAt: "2020-04-08T00:47:33.794Z",
      updatedAt: "2020-04-08T00:47:33.865Z",
      __v: 0,
    },
    {
      location: "Bronx, NY",
      willDeliver: false,
      messages: [],
      active: true,
      _id: "5e8d1f8647b6ce0017600593",
      title: "Schwinn Bicycle",
      price: "3.88",
      description: "This is a 19 speed bicycle, barely used.",
      author: "5e8d1f2539e7a70017a7c961",
      createdAt: "2020-04-08T00:49:10.248Z",
      updatedAt: "2020-04-08T00:49:10.248Z",
      __v: 0,
    },
  ],
  messages: [
    {
      _id: "5e8d1f2539e7a70017a7c968",
      post: {
        _id: "5e8d1f2539e7a70017a7c964",
        title: "Practically new Stradivarius",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c962",
        username: "jane1234",
      },
      content: "I am very much in the market for a fine violin.",
    },
    {
      _id: "5e8d1f2539e7a70017a7c969",
      post: {
        _id: "5e8d1f2539e7a70017a7c965",
        title: "Golden Retriever puppies",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c961",
        username: "joe1234",
      },
      content: "OMG Puppies... I'll take them all!",
    },
    {
      _id: "5e8d1fd747b6ce0017600594",
      content: "I really love this item.  Can I have it?",
      post: {
        _id: "5e8d1f2539e7a70017a7c965",
        title: "Golden Retriever puppies",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c961",
        username: "joe1234",
      },
    },
  ],
  _id: "5e8d1f2539e7a70017a7c961",
  username: "joe1234",
  __v: 0,
};
export const myData = async (token) => {
  try {
    // const response = await fetch(`${BASE_URL}/users/me`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   },
    // });
    // const result = await response.json();
    // console.log(result);
    return userData;
  } catch (err) {
    console.error(err);
  }
};
