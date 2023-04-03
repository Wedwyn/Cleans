import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


export default () => {
    const app = express();
    // app.set('view engine', 'pug');
    // app.use(methodOverride('_method'));
    // app.use(bodyParser.urlencoded({ extended: false }));
    console.log('--------path--------');
    console.log((path.join(__dirname, 'views/html')));
    app.use('/views', express.static(path.join(__dirname, 'views')));
    // app.use(session({
    //   secret: 'secret key',
    //   resave: false,
    //   saveUninitialized: false,
    // }));
    // app.use(flash());
  
    // const users = [new User('admin', encrypt('qwerty'))];
  
    // app.get('/', (_req, res) => {
    //   // res.render('Index.html');
    //   // res.render('Index.html');
    //   // res.json({123:'hello mazafaka'});
    //   res.send('Hello World');
    // });
    return app;
}