import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./services/store";
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from "react-dnd";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <App/>
            </DndProvider>
        </Provider>
    </React.StrictMode>
);

