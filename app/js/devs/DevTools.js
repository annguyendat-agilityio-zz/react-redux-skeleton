export default (store) => (next) => (action) => {
    let result;

    console.group(action);
    console.info('dispatching', action);

    result = next(action);

    console.log('next state', store.getState());
    console.groupEnd(action);

    return result;
};
