import React from 'react';
import type { FC } from 'react';
import {Button} from 'antd';
import 'antd/dist/reset.css';
import './App.css';

const App: FC = () => (
    <div className="App">
        <h1>Hello World</h1>
        <Button type="primary">Button</Button>
    </div>
);

export default App;