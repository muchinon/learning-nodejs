import {writeFile} from 'node:fs';

writeFile('./hello.html', '<h1>Learning Node.js>', () =>{
    console.log('File was created');
});
