const   express       = require("express");
const app = express();
const router = express.Router();
app.use(router);

//Imports
const dashboardCtrl = require('../dashboard/dashboard');
const dashboardConnection = require('../dashboard/dashboardConnection');
const dashboardServices = require('../dashboard/dashboardServices');

//Dashboard Controller
router.route('/hellodash').get(dashboardCtrl.hello);
/*
router.route('/getcommercialstatus').get(dashboardCtrl.getProjectCommercialStatus);
router.route('/getexecutionstatus').get(dashboardCtrl.getProjectExecutionStatus);
router.route('/getcolleagues').get(dashboardCtrl.getProjectColleagues);
router.route('/getdescription').get(dashboardCtrl.getProjectDescription);
//router.route('/getprojects').get(dashboardCtrl.getProjects);
//router.route('/getConnection').get(dashboardConnection.createConnection);
//router.route('/getQuery').get(dashboardConnection.createQuery);
//router.route('/getprojectss').get(dashboardServices.getProjects);
*/

router.route('/getprojects').get(dashboardCtrl.getProjects);


module.exports = router;
