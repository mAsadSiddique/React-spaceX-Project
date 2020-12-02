import React from 'react';
import { useLaunchProfileQuery, Mission } from '../../generated/graphql';
import MissionInfo from './MissionInfo';

interface Props {
    Id: String,
}

const MissionInfoContainer: React.FC<Props> = (Id: any) => {
    // console.log("ID", Id)
    const { data, loading, error } = useLaunchProfileQuery({
        variables: { id: Id.id },
    });

    if (loading) {
        return (
            <div className="loading__container">
                <ul>
                    <li>L</li>
                    <li>O</li>
                    <li>A</li>
                    <li>D</li>
                    <li>I</li>
                    <li>N</li>
                    <li>G</li>
                </ul>
            </div>
        )
    }

    if (error || !data)
        return <h2>Error 404</h2>



    return (
        <div>
            <MissionInfo
                data={data}
            />
        </div>
    )
}

export default MissionInfoContainer;
