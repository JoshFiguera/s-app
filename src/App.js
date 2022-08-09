import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import {HashRouter, Route, Routes, useLocation, useNavigate, useParams, Navigate} from 'react-router-dom';

import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";


//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    catchAllUnhandledErrors = () => {
        //(reason, promise) - props
        alert('Some error occurred')
        //console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Suspense fallback={<Preloader/>}>
                    <Routes>

                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/messages' element={<DialogsContainer/>}/>
                        <Route path='*' element={() => <div>404 NOT FOUND</div>}/>
                    </Routes>
                </Suspense>

                <div>
                    <Routes>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>


            </div>
        </div>

    }

}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter)
(App)

const MainSocialApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainSocialApp;
