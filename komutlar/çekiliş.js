const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Award Yardım Menüsü')
        .setThumbnail('')
        .setDescription('Botu Davet Etmek İçin `/davet` yazabilirisiniz.',false)
        .addField('**__Çekliş Başlat__**',' `/çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','  `/çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Yenile__**','  `/edit <MessageID> <WinnersAmount> <Prize> <TimeValue>` \n Belirtilen cekilisi düzenler',true)
        .addField('**__Çekiliş Liste__**','`/çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', '`/çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
        .addField('**__Bilgilendirme__**', '  `/davet` | Botu Sununuya Davet Edersiniz \n `/istatistik` | Botun İstatistiklerini Görürsünüz \n `/support` | Botun Destek sunucu linkini atar',true)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ["help"],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};