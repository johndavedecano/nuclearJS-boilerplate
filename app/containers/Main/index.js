import React from 'react';
import { connect } from 'nuclear-js-react-addons';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Allahu Akbhar</div>
    }
}

function mapStateToProps(props) {
    return {}
}

export default connect(mapStateToProps)(Main);