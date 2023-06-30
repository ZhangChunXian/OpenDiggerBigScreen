const fs = require('fs');
const path = require('path');

let dirPath = './public/top_300_metrics'; // 你的文件夹路径
let folders = [];

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        let subDirPath = path.join(dirPath, file);
        fs.stat(subDirPath, (err, stat) => {
            if (err) {
                console.error("Error stating file.", err);
                return;
            }

            if (stat.isDirectory()) {
                fs.readdir(subDirPath, (err, subFiles) => {
                    if (err) {
                        console.error("Could not list the subdirectory.", err);
                        process.exit(1);
                    }

                    subFiles.forEach((subFile, index) => {
                        let subSubDirPath = path.join(subDirPath, subFile);
                        fs.stat(subSubDirPath, (err, stat) => {
                            if (err) {
                                console.error("Error stating file.", err);
                                return;
                            }

                            if (stat.isDirectory()) {
                                folders.push({value: '选项' + (folders.length + 1), label: file + '/' + subFile});
                            }
                        });
                    });
                });
            }
        });
    });
});

// 等待所有异步操作完成后，打印结果
process.on('exit', () => {
    console.log(folders);
});
