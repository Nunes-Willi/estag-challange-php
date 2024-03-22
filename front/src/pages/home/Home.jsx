import React from 'react';

import FormI from '../../components/FormI';
import TableI from '../../components/Table';
// import FooterH from '../../components/FooterH';
function Home() {
    return (  

        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FormI />
            <TableI />
            {/* <FooterH /> */}
        </div>
    );
}

export default Home;