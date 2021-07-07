
export const counterSelector = (state) => ([state.counter.count]);
export const dataSelector = (state) => (state.counter.data);

export const todoSelector = (state) => state.todoReducer.data;
export const testSelector = (state) => state.todoReducer.test;

export const catDataSelector = (state) => state.dataCat.cats;
export const catReqDataSelector = (state) => state.dataCat.catsReq;
export const isFetchingSelector = (state) => state.dataCat.isFetching
export const isErrorSelector = (state) => state.dataCat.error