//libraries
import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';

//style
import './Home.css';

// export const RootContext = createContext();
// const Provider = RootContext.Provider;

class Home extends Component {


    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                        <Link to="/youtube-component">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YoutubeCompPage} />
                    <Route path="/hooks" component={Hooks} />
                </Fragment>
            </Router >
        )
    }
}

export default GlobalProvider(Home);