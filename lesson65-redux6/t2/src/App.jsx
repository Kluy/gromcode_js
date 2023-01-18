import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import SearchField from './user/SearchField';
import UserInfo from './user/UserInfo';

const App = () => {
    return (
        <Provider store={store}>
            <div className="page">
                <UserInfo />
                <SearchField />
            </div>
        </Provider>
    )
}

export default App;