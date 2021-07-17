export const GET_POSTSMIDL = 'GET_POSTSMIDL';
export const GET_TODOSMIDL = 'GET_TODOSMIDL';

export const ACTION_GET_POSTSMIDL = (path) => ({
  type: GET_POSTSMIDL,
  path,
});

export const ACTION_GET_TODOSMIDL = (path) => ({
  type: GET_TODOSMIDL,
  path,
});
// 3. По своей сути этот файл - экшн-обертка для обращения к middleware, отправной файл для перехвата, впринципе можно обойтись и без нее, но красивее и более гармонично с ней. Нелогичность заключается в том, что нет нигде импортов и экспортов как мы привыкли - непонятно куда улетает path при экшене. МЫ ЛОВИМ НЕ РЕДЬЮСЕРА ЭКШН А МИДЛВАРКИ
