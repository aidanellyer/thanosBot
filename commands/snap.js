exports.run = (client, msg, [mention, ...reason]) => {

    //  
    const config = require("../config.json")
    const modRole = msg.guild.roles.find("name", `${config.moderation}`);
    const kickMember = msg.mentions.members.first();
    let reasonMsg = reason.join(" ");
    let kicker = msg.author.tag;
    let date = new Date();
    let channel = client.channels.get(config.logs);
    const snap = [
        "https://tenor.com/view/thanos-finger-snap-disappear-gif-13174976",
        "https://tenor.com/view/thanos-ihope-they-remember-you-avengers-infinity-war-gif-11756387"
    ];



    if (!modRole)
        return console.log(`The ${config.moderation} role does not exist`);

    if (!msg.member.roles.has(modRole.id))
        return msg.reply("You can't use this command.");

    if (msg.mentions.members.size === 0)
        return msg.reply("Please mention a user to kick");

    if (reasonMsg.length === 0)
        return msg.reply("Enter a reason");

    if (!msg.guild.me.hasPermission("KICK_MEMBERS"))
        return msg.reply("");

        msg.channel.send(snap[Math.floor(Math.random() * snap.length)]);
        msg.channel.send("*snap* pffffhjhfhfhfhfhdfhdghgsdggshsghsgsgg",
        {
            tts: true
        })

    kickMember.kick(reasonMsg).then(member => {
        kickMember.send(`You were snapped on ${date} by ${banner} for the reason: ${reasonMsg}**`)

     
          
        })
    }
