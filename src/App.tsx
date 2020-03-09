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

import { flameOutline, mapOutline, calendarOutline } from 'ionicons/icons';
import AboutBurnTabContainer from './pages/about/AboutBurnTabContainer';
import EventsTabContainer from './pages/events/EventsTabContainer';
import MapTabContainer from './pages/map/MapTabContainer';

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
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
const store = createStore();

const App: React.FC = () => (
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/burn" component={AboutBurnTabContainer} exact={true} />
              <Route path="/events" component={EventsTabContainer} exact={true} />
              <Route path="/map" component={MapTabContainer} />
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
    </Provider>
);

export default App;
