
export const counterSelector = (state) => ({count: [state.counter.data.count],});
export const dataSelector = (state) => ({data: state.counter.data.item,});

export const todoSelector = (state) => state.todoReducer.data;
export const testSelector = (state) => state.todoReducer.test;