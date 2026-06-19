const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Tạo một server ảo để Render không bị tắt (Web Service bắt buộc phải có port lắng nghe)
http.createServer((req, res) => {
  res.write("Bot dang chay online!");
  res.end();
}).listen(process.env.PORT || 3000);

client.on('ready', () => {
  console.log(`Đã online tài khoản: ${client.user.tag}`);
  client.user.setStatus('online'); 
});

// Sử dụng Variable Environment (Biến môi trường) để bảo mật Token
client.login(process.env.DISCORD_TOKEN);
