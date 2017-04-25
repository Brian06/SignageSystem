const   express       = require("express");
const app = express();
const router = express.Router();
app.use(router);

//Imports
const jenkinsCtrl = require('../jenkins/jenkins');

//Jenkins Controller
router.route('/hellojenkins').get(jenkinsCtrl.hello);
router.route('/getbuild').get(jenkinsCtrl.getProjectBuild);


module.exports = router;
