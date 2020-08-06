/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

module.exports = async (user) => {
    return user.avatar ? 
        `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.includes("a_") ? "gif": "png"}` :
        `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`
}
