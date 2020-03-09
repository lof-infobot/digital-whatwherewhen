import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './AboutBurnTab.css';

const AboutBurnTab: React.FC = (props:any) => {
  const principles = [];

  for (let i = 0; i < props.principles.length; i++) {
    let principle = props.principles[i];
    principles.push(
      <IonCard>
        <IonCardHeader>
            <IonCardTitle>{principle.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{principle.content}</IonCardContent>
      </IonCard>
    );
  }

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
          { principles }
      </IonContent>
    </IonPage>
  );
};

export default AboutBurnTab;
