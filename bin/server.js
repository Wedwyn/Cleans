
import app from '../src/index.js';

console.log(app());

const port = 8080;
app().listen(port, () => {  
  // eslint-disable-next-line no-console
  console.log(`Server was started on '${port}'`);
});
