const Discord = require("discord.js")
const cor = require("../config.json").cor;
const config = require("../config.json")
const db = require("quick.db")
module.exports = {
    
    run: async(client, message, args) => {
        
        const embederro = new Discord.MessageEmbed()
        .setTitle(`Erro - Permissão`)
        .setDescription(`Você não tem permissão para isto!`)
        .setColor(config.cor)
        .setFooter(`${config.nomebot} - Todos os direitos reservados.`)
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] })
                const embednprod = new Discord.MessageEmbed()
                .setTitle("Erro - Sistema de Gerenciar")
                .setDescription("Você não tem nenhum produto adicionado, utilize \`[f!add]\` para criar o produto!")
                .setColor(config.cor)
                
                if(db.all().length == 0) return message.channel.send({embeds: [embednprod]}).then(msg => {
                    message.delete()
                    setTimeout(() => msg.delete(), 10000)
                })
                message.delete()
        const row = new Discord.MessageActionRow()
.addComponents(
    new Discord.MessageSelectMenu()
        .setCustomId('gerenciar')
        .setPlaceholder('Selecione uma opção')
        .addOptions(db.all().map(item => ({ label: `ID: ${item.ID}`, description: `NOME: ${item.data.nome || "Sem nome"} - PREÇO: R$${item.data.preco},00`, value: item.ID }))),
);
const embed = new Discord.MessageEmbed()
.setTitle(`${config.nomebot} | Gerenciar estoque`)
.setDescription(`Menu de gerenciar seus produtos`)
.setColor(config.cor)
.setFooter("Selecione o menu abaixo e clique no produto que você quer gerenciar")
.setImage(config.fotoembed)
message.channel.send({embeds: [embed], components: [row]})
    }
}