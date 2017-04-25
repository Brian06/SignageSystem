import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ProjectOverview from './views/projectOverview/ProjectOverview';
import DetailedView from './views/detailedView/DetailedView';
import ConfigurationPanel from './views/configurationPanel/ConfigurationPanel';
import PanelBody from './views/configurationPanel/PanelBody';
import DashboardIntegration from './views/configurationPanel/dashboard/DashboardIntegration';
import JenkinsIntegration from './views/configurationPanel/jenkins/JenkinsIntegration';
import SonarIntegration from './views/configurationPanel/sonar/SonarIntegration';
import Projects from './views/configurationPanel/manageProjects/Projects';
import Rotation from './views/configurationPanel/rotation/Rotation';
import Edit from './views/configurationPanel/manageProjects/Edit';


//Project Routes
render((
  <Router history={browserHistory}>
    <Route path="/detailedview" component={DetailedView}/>
    <Route path="/overview" component={ProjectOverview}/>
    <Route path="/panel" component={ConfigurationPanel}>
      <IndexRoute component={PanelBody}/>
      <Route path="/dashintegration" component={DashboardIntegration}/>
      <Route path="/jenkinsintegration" component={JenkinsIntegration}/>
      <Route path="/sonarintegration" component={SonarIntegration}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/rotation" component={Rotation}/>
      <Route path="/edit" component={Edit}/>
    </Route>
  </Router>



), document.getElementById('app'));

SonarIntegration
