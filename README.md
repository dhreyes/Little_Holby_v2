# Little Holby Discord Bot

## Bot Features:

Little Holby offers:
- Moderation commands:
    - Help
    - Ban
    - Kick
    - Mute
    - Unmute
    - Unban
    - Addrole
    - Removerole
- Basic Ticket System:
    - Create Ticket
    - Close Ticket
    - Reopen Ticket

## Installation:
Install the bot using the following steps:
1. Fork the current repository to your local machine
2. In the directory of the forked repository, run the following command: npm install
    - This will install any missing dependencies.
    - This assumes you already have node.js installed on your machine.
    - Here is a [link](https://nodejs.org/en/) to install node.js on your machine.
3. In the directory of the forked repository, run the following command: node little_holby.js
    - This will start the bot.
4. The bot needs to be linked to a Discord server, which can be found on our [landing page.](http://littleholby.com.s3-website-us-east-1.amazonaws.com/)
    - The installation needs to be done by the server admin or a server moderator.
5. The bot is now ready to take commands on the server.

## How to use the bot:
The command prefix for the bot is `!`.
The usage of the commands is as follows:

    -!help:
        -This will show a list of commands.
    -!ban <@user> <reason>:
        -This will ban the user from the server.
    -!kick <@user> <reason>:
        -This will kick the user from the server.
    -!mute <@user> <reason>:
        -This will mute the user from the server.
    -!unmute <@user> <reason>:
        -This will unmute the user from the server.
    -!unban <@user> <reason>:
        -This will unban the user from the server.
    -!addrole <@user> <role>:
        -This will add the role to the user.
    -!removerole <@user> <role>:
        -This will remove the role from the user.
    -!ticket:
        -This will create a ticket link that can be used to create a private ticket with ticket creator and user.

## Future Updates

More features will be added to the bot including:
- Custom commands for specific roles
- Ticket system to be converted to a database storage instead of a text file
- Welcome/leave messages for users
- Move users in a voice channel
- Playing music in a voice channel
- Create a poll

## Known bugs
- Unmuting a non muted user will crash the bot.
- The Bot will not create a muted role automatically, this needs to be done manually in order for the mute command to work.
## Authors
[Jose Pablo Bonilla](https://github.com/JosePabloBonilla)
[David Harvey](https://github.com/dhreyes)