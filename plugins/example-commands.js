/**
 * Example commands
 * Phantom Ozonix - https://github.com/FlyingPhantom/Phantom-Ozonix
 *
 * Plugins make it easier to have custom commands and
 * modules while rebasing with the main repository.
 *
 * This file shows how to add commands.
 *
 * @license MIT license
 */

'use strict';

/**@type {{[k: string]: Command | string}} */
let commands = {
	about: function (target, room, user) {
		if (!(room instanceof Users.User) && !user.hasRank(room, '+')) return;
		this.say(Config.username + " code by A Flying Phantom: https://github.com/FlyingPhantom/Phantom-Ozonix");
	},
};

exports.commands = commands;
