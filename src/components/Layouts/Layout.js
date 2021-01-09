import React from 'react';
import Auxi from '../../hoc/Auxi';

const layout = (props) => (
    <Auxi>
        <div>Toolbar, Sidebar,  BackDrop</div>
        <main>
            {props.children}
        </main>
    </Auxi>
);

export default layout;