import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'antd/dist/antd.css';

const App = ({Component}) => {
    return (
        <>              
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeMap</title>
            </Head>
            <Component />
            아이콘 제작자 <a href="https://www.flaticon.com/kr/free-icon/compass_2948031" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon"> www.flaticon.com</a>
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;