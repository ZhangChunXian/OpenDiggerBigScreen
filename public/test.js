// 读取 projects.json
const fs = require('fs');
const projects = JSON.parse(fs.readFileSync('projects.json'));

// 排序并取前 20 个
projects.sort((a, b) => a.top - b.top);  
const top20 = projects.slice(0, 20);

// 只保留 name 和 value
const result = top20.map(p => ({
  name: p.name,
  value: p.value 
}));

// 输出结果
console.log(result);