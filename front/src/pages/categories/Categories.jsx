import React from 'react';

// import FooterG from '../../components/FooterG';
import FormC from '../../components/FormC';
import TableC from '../../components/TableC';

function Categories() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FormC />
            <TableC />
            {/* <FooterG/> */}
        </div>
    );
}

export default Categories;