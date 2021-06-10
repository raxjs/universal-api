export default (id, context) => (context ? tt.createVideoContext(id, context) : tt.createVideoContext(id));
