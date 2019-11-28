declare const wx: any;
const empty = () => {};
export default typeof wx !== 'undefined' && (wx['offNetworkStatusChange'] || empty);
