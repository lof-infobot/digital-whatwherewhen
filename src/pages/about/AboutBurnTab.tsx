import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip, IonLabel, IonIcon, IonCardSubtitle } from '@ionic/react';
import { bonfire, heart, fitness, musicalNote, gift, flower } from 'ionicons/icons';
import './AboutBurnTab.css';

const AboutBurnTab: React.FC = (props:any) => {
  const [tab, setTab] = useState('principle');

  const stateCheck= function(stateName: string) {
   if(tab === stateName) {return true} 
   else {
     return false
    }
  }

  const principles: any= [];
  const survival: any= [];
  const soundPolicyArray: any=[];
  const effigyArray: any=[];
  const artGrantArray: any=[];
  const artHonorariaArray: any=[];


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

  for (let i = 0; i < props.survivalGuide.length; i++) {
    let survivalGuide = props.survivalGuide[i];
    survival.push(
      <IonCard>
        <IonCardHeader>
            <IonCardTitle>{survivalGuide.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{survivalGuide.content}</IonCardContent>
      </IonCard>
    );
  }

  for (let i = 0; i < props.soundPolicy.length; i++) {
    let soundPolicy = props.soundPolicy[i];
    soundPolicyArray.push(
      <IonCard>
        <IonCardHeader>
            <IonCardTitle>{soundPolicy.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{soundPolicy.content}</IonCardContent>
      </IonCard>
    );
  }

  for (let i = 0; i < props.effigy.length; i++) {
    let effigy = props.effigy[i];
    effigyArray.push(
        <IonCardContent>{effigy.content}</IonCardContent>
    );
  }

  for (let i = 0; i < props.artHonoraria.length; i++) {
    let artHonoraria = props.artHonoraria[i];
    artHonorariaArray.push(
      <IonCard>
        <IonCardHeader>
            <IonCardTitle>{artHonoraria.title}</IonCardTitle>
            <IonCardSubtitle>{artHonoraria.artHonorariaArtist}</IonCardSubtitle>
            <IonCardSubtitle>{artHonoraria.artHonorariaGrant}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>{artHonoraria.content}</IonCardContent>
      </IonCard>
    );
  }

  for (let i = 0; i < props.artGrants.length; i++) {
    let artGrants = props.artGrants[i];
    artGrantArray.push(
      <IonCard>
        <IonCardHeader>
            <IonCardTitle>{artGrants.title}</IonCardTitle>
            <IonCardSubtitle>{artGrants.artGrantArtist}</IonCardSubtitle>
            <IonCardSubtitle>{artGrants.artHonorariaAwarded}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>{artGrants.content}</IonCardContent>
      </IonCard>
    );
  }

  const contentCheck= function() {
    if(tab === 'survivalGuide') {
      return survival
    } 
    else if(tab === 'soundPolicy'){
      return soundPolicyArray
    }
    else if(tab === 'effigy'){
    return <IonCard>{effigyArray}</IonCard>
    }
    else if(tab === 'artHonoraria'){
      return artHonorariaArray
    } else if (tab === 'artGrants') {
      return artGrantArray
    }
    else {
      return principles
     }
   }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Burn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonChip onClick={()=>setTab('principle')} color={stateCheck('principle')? "secondary" : "primary"}>
          <IonIcon icon={heart}/>
          <IonLabel>Principles</IonLabel>
        </IonChip>
        <IonChip onClick={()=>setTab('survivalGuide')} color={stateCheck('survivalGuide')? "secondary" : "primary"}>
          <IonIcon icon={fitness}/>
          <IonLabel>Survival Guide</IonLabel>
        </IonChip>
        <IonChip onClick={()=>setTab('soundPolicy')} color={stateCheck('soundPolicy')? "secondary" : "primary"}>
          <IonIcon icon={musicalNote}/>
          <IonLabel>Sound Policy</IonLabel>
        </IonChip>
        <IonChip onClick={()=>setTab('effigy')} color={stateCheck('effigy')? "secondary" : "primary"}>
          <IonIcon icon={bonfire}/>
          <IonLabel>Effigy</IonLabel>
        </IonChip>
        <IonChip onClick={()=>setTab('artGrants')} color={stateCheck('artGrants')? "secondary" : "primary"}>
          <IonIcon icon={gift}/>
          <IonLabel>Art Grants</IonLabel>
        </IonChip>
        <IonChip onClick={()=>setTab('artHonoraria')} color={stateCheck('artHonoraria')? "secondary" : "primary"}>
          <IonIcon icon={flower}/>
          <IonLabel>Art Honoraria</IonLabel>
        </IonChip>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">The Burn</IonTitle>
          </IonToolbar>
        </IonHeader>
          {contentCheck()}
      </IonContent>
    </IonPage>
  );
};

export default AboutBurnTab;
