import React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import MissionInfo from './MissionInfo';

function MissionInfoContainer() {
    const { data, loading, error } = useLaunchProfileQuery({
        variables: { id: '25' },
    });

    if (loading)
        return <h2>loading</h2>

    if (error || !data)
        return <h2>Error 404</h2>

    console.log(data)

    return (
        <div>
            <h3>Mission Info</h3>
            <MissionInfo
                data={data} />
        </div>
    )
}

export default MissionInfoContainer;
