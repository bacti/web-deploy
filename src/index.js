const PATH = require('path')
const FS = require('fs-extra')
const nodemon = require('nodemon')

nodemon({
    watch: '.',
    ext: 'js',
    script: PATH.join(__dirname, 'Server.js'),
})

nodemon
.on('start', _ => console.log('App Started'))
.on('quit', _ => console.log('App Quit'))
.on('restart', files => console.log('App Restarted: ', files))
.on('crash', _ =>
{
    console.log('App Crashed')
    FS.writeFileSync(PATH.join(__dirname, 'restart.js'), Date().toString())
})

