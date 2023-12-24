import React, {ReactNode} from 'react';
import Automatic from "../components/Automatic";
import Coil from "../components/Coil";
import Bullet from "../components/Bullet";
import Capacitor from "../components/Capacitor";
import Voltmeter from "../components/Voltmeter";
export type Trops = {
    children: React.ReactNode
}

// ({children}: Trops): React.ReactElement | JSX.Element
const LabItems: React.FC<Trops> = ({children}) => {
    return (
        <React.Fragment>
            <Automatic/>
            <Coil/>
            <Bullet/>
            <Capacitor/>
            <Voltmeter/>
            {children}
        </React.Fragment>
    );
};

export default LabItems;