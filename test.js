const axios = require('axios');
const https = require('https');

// 创建一个新的httpsAgent，忽略证书验证
const agent = new https.Agent({
    rejectUnauthorized: false
});

async function getRepoInfo(owner, repo) {
    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`, {
            httpsAgent: agent
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching repo info:", error);
    }
}

getRepoInfo("DioxusLabs", "dioxus");
