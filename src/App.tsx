import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import createStore from './redux/createStore';

import defaultState from './redux/defaultState.json';

import { flameOutline, mapOutline, calendarOutline } from 'ionicons/icons';
import AboutBurnTab from './pages/AboutBurnTab';
import EventsTab from './pages/EventsTab';
import MapTab from './pages/MapTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Redux app state */
let cachedState = window.sessionStorage.getItem("digital-whatwherewhen-redux-store");
const store = createStore(cachedState ? JSON.parse(cachedState) : defaultState);

const saveState = () => {
    window.sessionStorage.setItem("digital-whatwherewhen-redux-store", JSON.stringify(store.getState()));
};

store.subscribe(saveState);



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/burn" component={AboutBurnTab} exact={true} />
          <Route path="/events" component={EventsTab} exact={true} />
          <Route path="/map" component={MapTab} />
          <Route path="/" render={() => <Redirect to="/burn" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="burn" href="/burn">
            <IonIcon icon={flameOutline} />
            <IonLabel>The Burn</IonLabel>
          </IonTabButton>
          <IonTabButton tab="events" href="/events">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Events</IonLabel>
          </IonTabButton>
          <IonTabButton tab="map" href="/map">
            <IonIcon icon={mapOutline} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
