import React, { Component } from "react";
// import styles from "./app.module.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    {/* <p>Test</p> */}
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
