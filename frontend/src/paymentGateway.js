export const config = (amount) => {
  return {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: amount,
    publicKey: "pk_test_da1ac49723a3e6851f4bd8627d04730892eb6d4a",
  };
};
