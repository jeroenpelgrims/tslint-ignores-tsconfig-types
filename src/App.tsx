import * as React from 'react';
import './App.css';

interface IProps {
  value: string;
}

class App extends React.Component<IProps> {
  public render() {
    return (
      <div className="App">
        {this.props.value}
      </div>
    );
  }
}

export default App;
