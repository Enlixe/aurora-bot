/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('ScheduledMessage', {
        guildID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        channelID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cronExp: {
            type: Sequelize.STRING,
            allowNull: false
        },
        actions: {
            type: Sequelize.JSON,
            allowNull: false,
            defaultValue: []
        }
    });
};