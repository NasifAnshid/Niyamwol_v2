const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'MENU \n\n➢ .vtalk\n.  ```Starts to Eva voice chat.```\n\n➢ .fulleva \n.  ```Activates full functional Eva features. Turn your account into a ai chatbot!```\n```⌨️ Eg:- :``` ```.fulleva on / off```\n\n➢ .xmedia\n.  ```It is a plugin with more than 25 media tools.``` \n\n➢ .ownercmnd\n.  ```set of commands for bot user or sudo``` \n\n➢ .codtts\n.  ```language code to change the voice in .tts & also for .trt translation``` \n\n➢ .adan \n.  ```Finds prayer time.```\n```⌨️ Eg:- :``` ```.prayer <city>```\n\n➢ .rename \n.  ```[object Object]``` \n\n➢ .anime\n.  ```random anime image ``` \n\n➢ .apkmod\n\n➢ .fatp\n\n➢ .ttp \n.  ```Converts text to plain painting.``` \n\n➢ .attp \n.  ```Adds rainbow effect to the text as a sticker.``` \n➢ .autobio\n .  ```change Auto bio mode```\n```⌨️ Eg:- :``` ```.autobio on / off```\n\n➢ .bgm \n.  ```turn on and turn off bgm. -bot owner command```\n```⌨️ Eg:- :``` ```.bgm on / off```\n\n➢ .carbon\n.  ```It sends carbon picture``` \n\n➢ .bgm \n.  ```change reply message BGM mode```\n```⌨️ Eg:- :``` ```.bgm one / two```\n\n➢ .mp3\n.  ```Converts video to sound.``` \n\n➢ .photo\n.  ```Converts the sticker to a photo.``` \n\n➢ .mp4\n.  ```Converts animated stickers to video.``` \n\n➢ .dict\n .  ```Use it as a dictionary.Eg: .dict en_US;lead For supporting languages send *.lngcode*``` \n\n➢ .find\n.  ```Finds the Song``` \n\n➢ .git\n.  ```To get github links.``` \n\n➢ .welcome\n.  ```It sets the welcome message. If you leave it blank it shows the welcome message.```\n \n➢ .goodbye\n.  ```Sets the goodbye message. If you leave blank, it shows the goodbye message.``` \n\n➢ .antilink \n.  ```Activates the Antilink tool.```\n```⌨️ Eg:- :``` ```.antilink on / off```\n\n➢ .moretxt\n.  ```more txtit commands``` \n\n➢ .ffire \n.  ```add your text to random freefire logo``` \n\n➢ .emo \n.  ```emogi to png``` \n\n➢ .news \n\n➢ .notes\n.  ```Shows all your existing notes.``` \n\n➢ .save \n.  ```Reply a message and type .save or just use .save <Your note> without replying``` \n\n➢ .deleteNotes\n.```Deletes *all* your saved notes.```\n\n➢ .owner\n.  ```shows the detail of bot owner``` \n\n➢ .jid \n.  ```Giving users JID.``` \n\n➢ .random \n.  ```word image``` \n\n➢ .brdmore \n.  ```add readmore before your text``` \n\n➢ .rdmore \n.  ```add readmore before your text```\n\n ➢ .removebg \n.  ```Removes the background of the photos.``` \n\n➢ .report \n.  ```Sends reports to group admins.``` \n\n➢ .scan \n.  ```Checks whether the entered number is registered on WhatApp.``` \n\n➢ .trt\n.  ```It translates with Google Translate. You must reply any message.```\n```⌨️ Eg:- :``` ```.trt tr it (From Turkish to Italian)```\n\n➢ .detectlang\n.  ```Guess the language of the replied message.```\n\n➢ .currency\n\n➢ .tts \n.  ```It converts text to sound.```\n\n ➢ .song \n.  ```Uploads the song you wrote.``` \n\n➢ .video\n .  ```Downloads video from YouTube.``` \n\n➢ .sing \n.  ```It sings song that you have written```\n\n ➢ .song \n.  ```Uploads the song you wrote for ios users.``` \n\n➢ .wiki \n.  ```Searches query on Wikipedia.``` \n\n➢ .img \n.  ```Searches for related pics on Google.``` \n\n➢ .github \n.  ```Collects github information from the given username.\n⌨️ Example: .github phaticusthiccy``` \n\n➢ .lyric \n.  ```Finds the lyrics of the song.``` \n\n➢ .covid \n.  ```Shows the daily and overall covid table of more than 15 countries.``` \n\n➢ .sweather \n.  ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.``` \n\n➢ .compliment \n.  ```It sends complimentry sentenses``` \n\n➢ .hmod \n.  ```Finds mod apps from happymod``` \n\n➢ .insult \n.  ```It sends insulted words``` \n\n➢ .movie \n.  ```Shows movie info.``` \n\n➢ .joke \n\n.  ```It sends random jokes``` \n\n➢ .molu\n .  ```Chat with Pinky. Use .molu <message>``` \n\n➢ .owner\n.  ```shows the detail of bot owner``` \n\n➢ .quote \n.  ```It shares famous quotes``` \n\n➢ .ss \n.  ```Takes a screenshot from the page in the given link.``` \n\n➢ .setvar\n.  ```It sends high resolution wallpapers.``` \n\n➢ .show \n.  ```Get info related to tv series and shows``` \n\n➢ .ig \n.  ```Fetches user informations from instagram``` \n\n➢ .animesay \n.  ```It writes the text inside the banner the anime girl is holding``` \n\n➢ .changesay \n.  ```Turns the text into the change my mind poster.``` \n\n➢ .trumpsay\n .  ```Converts the text to Trumps tweet.``` \n\n➢ .bgm \n.  ```turn on and turn off bgm. -bot owner command```\n```⌨️ Eg:- :``` ```.bgm on / off```\n\n➢ .autosticker \n.  ```turn on and turn off bgm. -bot owner command```\n```⌨️ Eg:- :``` ```.sticker on / off```\n\n➢ .sudo \n.  ```changes sudo numbers```\n```⌨️ Eg:- :``` ```.sudo *your number*```\n\n➢ .caption \n.  ```changes all captions```\n```⌨️ Eg:- :``` ```.caption *Made by Liza Mwol*```\n\n➢ .handlers \n.  ```changes handlers```\n```⌨️ Eg:- :``` ```.handler ^[.!] ```\n\n➢ .botname \n.  ```change your bot name```\n```⌨️ Eg:- :``` ```.botname *name* ```\n\n➢ .theri  \n.  ```change your theri commands```\n```⌨️ Eg:- :``` ```.theri command,command```\n\n➢ .sticker\n.  ```It converts your replied photo or video to sticker.```\n\n➢ .alive\n.  ```Does bot work?```\n\n➢ .sysd\n.  ```Shows the system properties.``` \n\n➢ .tagadmin\n.  ```Tags group admins.```\n➢ .txtit\n.  ```Shows text to image tools with unlimited access.``` \n\n➢ .theri \n.  ```turn on & off anti-badword To remove members when they use bad words```\n```⌨️ Eg:- :``` ```.theri no / yes```\n\n➢ .a \n.  ```Converts audio to sound recording.``` \n\n➢ .unvoice\n.  ```Converts audio to sound recording.```\n\n➢ .update\n.  ```Checks the update.``` \n\n➢ .update now\n.  ```It makes updates.``` \n\n➢ .wallpaper\n.  ```It sends high resolution wallpapers.``` \n\n➢ .wame \n.  ```Get a link to the user chat.``` \n\n➢ .reset warn\n.  ```it sends good morning message```\n\n➢ .weather \n.  ```Shows the weather.``` \n\n➢ .speedtest\n.  ```Measures Download and Upload speed.``` \n\n➢ .ping\n.  ```Measures your ping.``` \n\n➢ .short\n .  ```Shorten the long link.``` \n\n➢ .calc \n.  ```Performs simple math operations.``` \n\n➢ .whois\n.  ```Displays metadata data of group or person.```\n\n➢ .gdmrng\n\n.  ```it sends good morning message```\n\n➢ .gdni8\n.  ```it sends good night message```\n '}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'XMEDIA \n\nXMEDIA COMMANDS ARE.\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n '}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'GIT \n\n```creater Nasif and Anshid```\n\n```owner number wa.me/919037601967```\n\n```owner number wa.me/919567072551```\n\n```whatsapp group : https://chat.whatsapp.com/CNWRCnCe1fZ7g3Wo4M8ij4```\n💫bot not allowed in the group\n\n```githublink       https://github.com/https://github.com/Nasif40/Niyamwol_v2```\n\n```audio commads    https://github.com/Nasif40/Niyamwol-media/tree/main/uploads```\n\n```sticker commads  https://github.com/Nasif40/Niyamwol-media/tree/main/stickers```\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴍᴜᴛʜᴇᴇ....👋🏻\n\n         ☆ *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* ☆\n\n💫 ɴᴀᴍᴇ  : ɴɪʏᴀᴍᴡᴏʟ      \n💫 sᴛᴀᴛᴇs : ᴘᴜʙʟɪᴄ\n💫 ᴛɪᴍᴇ   : ```' + plk_say + '```\n💫 ᴅᴀᴛᴇ : ```' + plk_here + '```\n💫 ᴘᴇʀғɪx : [ . ]\n\n         ☆ *𝙲𝚁𝙴𝙰𝚃𝙾𝚁𝚂* ☆\n\n💫ᴛᴇᴀᴍ ɴɪʏᴀᴍᴡᴏʟ\n\n          ☆ *𝚃𝙷𝙰𝙽𝙺𝚂* ☆\n\n💫 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: '© ᴛᴇᴀᴍ ɴɪʏᴀᴍᴡᴏʟ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
