const   express       = require("express");
const app = express();
const router = express.Router();
app.use(router);

const jenkinsIntegration = require('../configurationPanel/jenkins');
const sonarIntegration = require('../configurationPanel/sonar');
const dashboardIntegration = require('../configurationPanel/dashboard');
const dashboardRotation = require('../configurationPanel/rotation');

//Configuration Panel
router.route('/jenkinsdata')
  .get(jenkinsIntegration.getData)
  .post(jenkinsIntegration.saveData);

router.route('/sonardata')
  .get(sonarIntegration.getData)
  .post(sonarIntegration.saveData);

router.route('/dashboarddata')
  .get(dashboardIntegration.getData)
  .post(dashboardIntegration.saveData);

router.route('/rotationdata')
  .get(dashboardRotation.getData)
  .post(dashboardRotation.saveData);

module.exports = router;
