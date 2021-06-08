export default (id, context) => (context ? wx.createVideoContext(id, context) : wx.createVideoContext(id));
