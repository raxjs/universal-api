declare const wx: any;
export default typeof wx !== 'undefined' && wx['onNetworkStatusChange'];
