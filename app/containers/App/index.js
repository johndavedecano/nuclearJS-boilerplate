import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>{this.props.children}</div>
    }
}
App.contextTypes = {
  reactor: React.PropTypes.object.isRequired
};

export default App;