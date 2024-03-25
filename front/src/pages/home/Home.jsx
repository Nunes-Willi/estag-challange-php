import React from 'react';

import FormI from './componentsI/FormI';
import TableI from './componentsI/TableI';
import FooterH from './componentsI/FooterH'
function Home() {
    return (  

        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FormI />
            <TableI />
            <FooterH />
        </div>
    );
}

export default Home;