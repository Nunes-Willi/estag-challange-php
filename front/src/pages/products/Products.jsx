import React from 'react';

// import FooterG from '../../components/FooterG';
import FormP from './camponentsP/FormP';
import TableP from './camponentsP/TableP';
function Products() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FormP />
            <TableP />
            {/* <FooterG /> */}
        </div>
    );
}

export default Products;