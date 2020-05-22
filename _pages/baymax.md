---
title: Baymax
layout: single
permalink: /baymax/
<!-- classes: wide -->

toc: true
toc_label: Documentation
toc_icon: terminal

header:
  overlay_image: /assets/images/baymax/pawel-czerwinski-2JsSnODck0Y-unsplash.jpg
  og_image: /assets/images/ayu12.png
  overlay_filter: rgba(19, 41, 75, 0.5) # same as adding an opacity of 0.5 to a black background
  caption: "Photo credit: [**Paweł Czerwiński on Unsplash**](https://unsplash.com/photos/2JsSnODck0Y)"
  actions:
    - label: "Start Here"
      url: "https://wjonasreger.github.io/website/baymax/#new-members"
---

<!-- ![image-left](https://i.imgur.com/Urqzfrx.png){: .align-left} -->

<figure style="width: 200px; margin: 0; margin-right: 20px;" class="align-left">
  <img src="https://i.imgur.com/Urqzfrx.png" alt="">
  <figcaption style="color: grey;">Developed @ Illinois</figcaption>
</figure>

**Hello! I'm Baymax! How may I help you today?**

I am a privately developed and operated _Discord Bot_ for the `Urbana YSA` discord server, using the `Discord.js` library. The documentation on this page is up to date with `v2.1.0` (Founders Edition) of my programming. If you notice discrepancies or errors please notify Jonas.
{: style="text-align: justify;"}

# NEW MEMBERS

If you are new to the `Urbana YSA` server and need to be _verified_, then start here. Otherwise skip ahead to read more. You will need to go to the `#start-here` channel that you see at the top of the server. Make sure you remember your _username_ - you will need to type `!name @username [nickname]` (i.e. `!name @TheLegendOfKass Jonas`). Baymax will then notify the moderators of your name change and they will verify and admit you into the server.
{: style="text-align: justify;"}

# Basics of Server

This server uses three classes of roles - `ping`, `branch`, and `moderation`. In order to have access to much of the server you must be `verified` first. Then you'll be able to join/leave any `ping` roles as you wish. These roles are designated for pinging and have associated accesses to various channels (i.e. users with the `@gaming` role can access the `#gaming` channel). Usage of these roles are voluntary and not restricted for anyone who's been verified. `branch` roles are designated for members in the local area of the server and maintains a similar structure to that in the actual branch. `moderation` consists of moderators, admins, and developers that manage the server.
{: style="text-align: justify;"}

# Basics of Commands

Start by typing `!help` **or** reading the documentation here on this page. Every command must begin with the _prefix_, which is `!`. Then you will type a command name (or alias - read documentation below) to use a specific command. Some commands will require more input, or _arguments_ - the specifics are explained for each command. Command names/aliases and arguments are not case-sensitive so feel free to capitalise or not. If you make a mistake, then you will likely get a response from Baymax about what went wrong. If the error message was too obscure or not understandable, ask any of the moderators or me for help.
{: style="text-align: justify;"}

# Structure of Commands

When reading through the documentation, you will likely find some things a little confusing - these will be generally explained here. The `name`, `aliases`, and `description` are straight forward, and `usage` might be somewhat confusing but is complemented by the examples given. The leaves `server use only`, `cooldown`, `level`, and `duration`. `Server use only` is very straight forward for any seasoned user of Discord, but it simply means that a command cannot be used outside of the `Urbana YSA` server - so it won't work in DM's and Group chats. `Cooldown` is the period of time you must wait to use a command again. `Level` refers to what role or permission flag one would need to be able to use the command - one exception would be for the `nickname` command where any verified member can use it on themselves, one must have the `MANAGE_NICKNAMES` flag in order to use it on other members. Lastly, `duration` refers to how long a message from Baymax will remain in the chat before it is automatically deleted by Baymax. These are mostly for error messages, but do extend to various other messages that Baymax might send. One thing to note is that all command messages (i.e. `!help gif`) sent from a user is automatically deleted immediately to curb the clutter in the text chats. If one wants to send a command message to show another user the syntax of the command, then don't start the message with the prefix, `!` (i.e. `- !help gif`), or better yet use the back ticks to send a message as code inserts (look at code insert in the following section).
{: style="text-align: justify;"}

# Basics of Markdown

 - Bold: **Bold** `**Bold**`
 - Italics: *Italics* `*Italics*` or `_Italics_`
 - Underline: __Underline__ `__Underline__`
 - Strike: ~~Strike~~ `~~Strike~~`
 - Code insert: `code insert` \`code insert\`
   - (back tick next to the 1 key)
 - Code block:
```
code block
```
\`\`\`<br>
code block<br>
\`\`\`
 - Embed link: `!embed [text goes here](https://someurl) need 10 words minimum for embed command.`

# Potential Future Updates

 - `role` command that will help manage ping roles, branch roles, and moderation roles.
 - `search` command that will initially support searching for keywords in scriptures, but could be generally applicable to any text.
 - `react` command that will allow role management through reactions.
 - Update to `poll`, allowing more sophisticated use.
 - `pvalue` command for statistical uses.
 - `tempmute` command for temporary muting or soft banning.

# Command Documentation

{% include baymax_cmds.html %}
