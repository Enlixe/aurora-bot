/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Client', {
        blacklistedGuilds: Sequelize.JSON,
        blacklistedUsers: Sequelize.JSON
    });
};