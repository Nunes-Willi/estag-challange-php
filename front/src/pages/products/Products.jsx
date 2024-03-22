import React from 'react';

// import FooterG from '../../components/FooterG';
import FormP from '../../components/FormP';
import TableP from '../../components/TableP';
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