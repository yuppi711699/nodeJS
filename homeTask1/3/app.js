const {createReadStream}=require('fs');

const rs = createReadStream('./package.json');
rs.on('open')