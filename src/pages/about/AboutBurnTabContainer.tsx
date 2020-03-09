import { connect } from 'react-redux';
import AboutBurnTab from './AboutBurnTab';

const mapStateToProps = (state:any, props:any) =>
    ({
        principles: state.content["01_Principles"],
        survivalGuide: state.content["02_SurvivalGuide"],
        soundPolicy: state.content["03_SoundPolicy"],
        effigy: state.content["04_Effigy"],
        artGrants: state.content["05_ArtGrants"],
        artHonoraria: state.content["06_ArtHonoraria"]
    });

const mapDispatchToProps = (dispatch:object, props:any) =>
    ({
        // Use this convention to assign declare component property functions that dispatch redux action functions
        // (Note that you'll need to import doReduxAction()):
        // componentFunction(type, value) {
        //   dispatch(doReduxAction(type, value));
        // }
    });

export default connect(mapStateToProps, mapDispatchToProps)(AboutBurnTab);