const fs = require('fs');
const path = require('path');
const ImageDataURI = require('image-data-uri');

const DIR_PATH = process.env.DIR_PATH;
const OUTPUT_NAME = process.env.OUTPUT_NAME;

(async () => {

    let data = [];

    fs.readdir(DIR_PATH, (error, files) => {
        if (error) process.exit(1);

        files.forEach(async (file, index) => {
            let res = await get_data_uri(file);
            let res_object = {file : file, URI : res}
            modify_data(res_object);
            if (index == files.length - 1) write_data();
        });
    });

    async function get_data_uri(file) {
        let res = await ImageDataURI.encodeFromFile(path.join(DIR_PATH, file));
        return res;
    }
    
    async function modify_data(data_to_add) {
        data.push(data_to_add);
    }
    
    function write_data() {
        fs.writeFile(`${OUTPUT_NAME}.js`, `export default dataURIs = ${JSON.stringify(data)}`, status => {});
    }

})()