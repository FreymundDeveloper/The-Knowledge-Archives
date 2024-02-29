const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => {
        const message = 'Error, MongoDB not Connected!!';
        console.log('\x1b[41m%s\x1b[37m', message, '\x1b[0m');
        console.log('Error Found:', err)
    })