let initialState = {  friends: [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "David", age: 35 },
]};

const sideBarReducer = (state = initialState, action) => {
  return state;
};
export default sideBarReducer;
