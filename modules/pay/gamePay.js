/**
 * Created by xinyuan6009 on 17-1-15.
 */

/**
 * 跳转到
 * @param req
 * @param res
 */
module.exports.toGamePayPage = function (req, res) {
    console.info("收到消息了");
    var gameDist = req.body.gameDist;
    var serverId = req.body.serverId;
    var gift = req.body.gift;
    var roleName = req.body.roleName;
    res.locals.gameDist=gameDist;
    res.locals.serverId=serverId;
    res.locals.gift=gift;
    res.locals.roleName=roleName;
    res.render('pay.jade');  //http://localhost:8081/index
}