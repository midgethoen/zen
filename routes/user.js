var Router = require('express').Router
var R = require('ramda')

module.exports = function(User) {

  var router = Router();

  /*
   * Create a user account
   */
  router.post('/', (req, res)=>{
    console.log('user', req.body)
    var user = new User(req.body)
    user.save()
      .then(user=>{
        res.status(200).json(R.pick(['_id'], user))
      },
      error=>{
        res.status(500).end(error.message)
      })
  });

  /*
   * Retrieve a user account
   */
  router.get('/:id', (req, res)=>{
    User.findById(req.params.id)
      .then( (user)=>{
        res.status(200).json(user.toObject)
      })
      .catch( error=>{
        res.status(500).end(error.message)
      })
  });

  return router;
}
