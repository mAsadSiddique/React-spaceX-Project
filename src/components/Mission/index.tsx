import React from 'react'
import { useMissionsInfoQuery } from '../../generated/graphql';
import { from } from '@apollo/client'
import MissionList from './MissionList';

function MissionContainer() {

    const { data, error, loading } = useMissionsInfoQuery();

    if (loading)
        return <h2>loading</h2>

    if (error || !data)
        return <h2>Error 404</h2>

    console.log(data)

    return (
        <div>
            <h3>Missions</h3>
            <MissionList
                data={data} />
        </div>
    )
}

export default MissionContainer
