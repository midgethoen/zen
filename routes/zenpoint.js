var Router = require('express').Router;
var schedule = require('node-schedule');

module.exports = function(User, Zentry) {

  var router = Router();
  /*
   * Post zenpoints
   */
  router.post('/', (req, res)=>{
    User.findById(req.body.id).then( user=>{
        return Promise.all([
          user.update({$inc: {total: req.body.amount}}),
          new Zentry({
            amount: req.body.amount,
            user: user.id
          }).save()
        ])
      })
      .then( ()=>{
        res.status(201).end()
      })
      .catch( error=>{
        res.status(500).end(error.message)
      })
  });

  return router;
}
