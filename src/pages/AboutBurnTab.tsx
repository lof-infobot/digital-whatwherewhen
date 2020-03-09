import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './AboutBurnTab.css';

const AboutBurnTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Burn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">The Burn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="The Burn Page" description="A tab for all general burn-related content (art grants, survival guide, etc)" />
      </IonContent>
    </IonPage>
  );
};

export default AboutBurnTab;
