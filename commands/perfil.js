const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../config.json")
const moment = require("moment")



moment.locale("pt-br");
const {
    JsonDatabase,
} = require("wio.db");

const db2 = new JsonDatabase({
  databasePath:"./databases/myJsonDatabase.json"
});
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {

       
        const member = message.member;

        
        const tag = member.user.username;
        let id = member.user.id;

        const gasto = db2.get(`${id}.gastosaprovados`) || "0";
     const pedidos = db2.get(`${id}.pedidosaprovados`) || "0";
        if(id === "898209296393842758") {
            const embed = new Discord.MessageEmbed()
.addField(`Nome:`, `\`${tag}\``, true)
.addField(`Id:`, `\`${id}\``, true)
.addField(`Total Gasto:`, `\`R$1,000,000\``, true)
.addField(`Compras:`, `\`${pedidos}\``, true)
.addField(`Rank:`, `\`DEUS\``, true)
.addField(`Proximo Rank:`, `\`NO RANKS\``, true)
.setColor(config.cor)
message.channel.send({embeds: [embed]})
        } else {
            if(gasto <= 100) {
const embed = new Discord.MessageEmbed()
.addField(`Nome:`, `\`${tag}\``, true)
.addField(`Id:`, `\`${id}\``, true)
.addField(`Total Gasto:`, `\`R$${gasto},00\``, true)
.addField(`Compras:`, `\`${pedidos}\``, true)
.addField(`Rank:`, `\`Vip 1\``, true)
.addField(`Proximo Rank:`, `\`Vip 2 - [${gasto}/100]\``, true)
.setColor(config.cor)
message.channel.send({embeds: [embed]})
     }
     if(gasto >= 101) {
        const embed = new Discord.MessageEmbed()
        .addField(`Nome:`, `\`${tag}\``, true)
        .addField(`Id:`, `\`${id}\``, true)
        .addField(`Total Gasto:`, `\`R$${gasto},00\``, true)
        .addField(`Compras:`, `\`${pedidos}\``, true)
        .addField(`Rank:`, `\`Vip 2\``, true)
        .addField(`Proximo Rank:`, `\`Vip 3 - [${gasto}/10,000]\``, true)
        .setColor(config.cor)
        message.channel.send({embeds: [embed]})
     }
    }}
}