import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextInput, Thing } from '../.';

const App = () => {
  const [ text, setText] = React.useState<string>('')

  return (
    <div>
      <h1>Form Examples</h1>
      <TextInput
        label="Test-Label"
        name='text-example'
        text={text}
        setText={setText}
      />
      <Thing test={'hat'} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
