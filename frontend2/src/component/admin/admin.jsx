import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/esm/Container';

import AdmDiscos from './admDiscos';
function Admin() {

    const [key, setKey] = useState('discos');

    return (
        <Container >
        <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab title=" " ></Tab>

            <Tab eventKey="discos" title="Discos">
            <AdmDiscos />
            </Tab>

        </Tabs>
        </Container>
    );
}

export default Admin