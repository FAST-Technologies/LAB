import React, {ReactNode} from 'react';
import LabItems from "../constants/LabItems";
import Automatic from "../components/Automatic";
import Coil from "../components/Coil";
import Bullet from "../components/Bullet";
import Capacitor from "../components/Capacitor";
import Voltmeter from "../components/Voltmeter";


export interface Data {
    id: number
    component: JSX.Element
}

export type Components = {
    component:  React.FC,
    index: number
}

export const models1: Data[] = [
    {
      id:1,
      component: <Automatic />,
    },
    {
        id:2,
        component: <Coil />,
    },
    {
        id:3,
        component: <Bullet />,
    },
    {
        id:4,
        component: <Capacitor />,
    },
    {
        id:5,
        component: <Voltmeter />,
    },
]

const models: JSX.Element[] = [
    <Automatic />,
    <Coil />,
    <Bullet />,
    <Capacitor />,
    <Voltmeter />
]
const DragAndDrop = () => {
    // React.Children.toArray(LabItems)
    return (
        <div className="grid">
            {
                models.map((component, index) => (
                    <React.Fragment key={index}>
                        { component }
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default DragAndDrop;