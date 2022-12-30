const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../config.json")
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        const embederro = new Discord.MessageEmbed()
        .setTitle(`Erro - Permissão`)
        .setDescription(`Você não tem permissão para isto!`)
        .setColor(config.cor)
        .setFooter(`${config.nomebot} - Todos os direitos reservados.`)
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] })
                message.delete();
                if(!args[0]) return message.channel.send("coloque um produto ao lado")
                if(!db.get(args[0])) return message.channel.send("produto não existe")
        const row = new Discord.MessageActionRow()               
        .addComponents(
            new Discord.MessageButton()
                .setCustomId(args[0])
                .setLabel('Comprar')
                .setEmoji("🛒")
                .setStyle(config.botao),
        );
const embed = new Discord.MessageEmbed()
.setTitle(`${config.nomebot} | Produto`)
.setDescription(`\`\`\`${db.get(`${args[0]}.desc`)}\`\`\`\n💎 - **Nome:** **__${db.get(`${args[0]}.nome`)}__**\n💵 - **Preço:** **__R$${db.get(`${args[0]}.preco`)}__**\n🗃️ - **Estoque:** **__${db.get(`${args[0]}.conta`).length}__**`)
.setColor(config.cor)
.setFooter("Para comprar clique no botão abaixo.")
.setImage(config.fotoembed)
message.channel.send({embeds: [embed], components: [row]})

    }
}