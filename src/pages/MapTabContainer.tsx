import { connect } from 'react-redux';
import MapTab from './MapTab';

const mapStateToProps = (state:any, props:any) =>
    ({
        // Use this convention to assign redux state to component properties:
        // propName: state.reduxProperty
    });

const mapDispatchToProps = (dispatch:object, props:any) =>
    ({
        // Use this convention to assign declare component property functions that dispatch redux action functions
        // (Note that you'll need to import doReduxAction()):
        // componentFunction(type, value) {
        //   dispatch(doReduxAction(type, value));
        // }
    });

export default connect(mapStateToProps, mapDispatchToProps)(MapTab);