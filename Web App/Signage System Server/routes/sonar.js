const   express       = require("express");
const app = express();
const router = express.Router();
app.use(router);

//Imports
const sonarCtrl = require('../sonar/sonar');

//Sonar Controller
router.route('/hellosonar').get(sonarCtrl.hello);
router.route('/getcoverage').get(sonarCtrl.getProjectCoverage);


module.exports = router;
