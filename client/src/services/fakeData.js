export default {
  signInSuccess: {
    status: 200,
    respon: {
      user_id: 1,
      user_name: "경태",
    },
  },
  signInfailed_email: {
    status: 403,
  },
  signInfailed_password: {
    status: 401,
  },
  signUpSuccess: {
    status: 200,
  },
  signUpfailed_email: {
    status: 409,
  },
  monthly_list: {
    user_name: "경태",
    items: [
      {
        item_id: 1,
        item_name: "에어팟",
        item_price: 200000,
        memo: "사고 싶다!",
        purchased: false,
        worry: 0,
        categort_id: 1,
      },
      {
        item_id: 2,
        item_name: "당근",
        item_price: 12000,
        memo: "싫다!",
        purchased: false,
        worry: 0,
        categort_id: 2,
      },
      {
        item_id: 3,
        item_name: "양파",
        item_price: 8800,
        memo: "양파다!",
        purchased: false,
        worry: 0,
        categort_id: 1,
      },
      {
        item_id: 4,
        item_name: "에어팟2",
        item_price: 153200,
        purchased: false,
        worry: 0,
        categort_id: 1,
      },
      {
        item_id: 5,
        item_name: "에어팟3",
        item_price: 320000,
        purchased: false,
        worry: 0,
        categort_id: 1,
      },
    ],
  },
};
