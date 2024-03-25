import React from 'react';

// import FooterG from '../../components/FooterG';
import FormC from './componentsC/FormC';
import TableC from './componentsC/TableC';

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