import React from 'react'
import { useMissionsInfoQuery } from '../../generated/graphql';
// import { from } from '@apollo/client'
import MissionList from './MissionList';


interface setName {
    setId: any
}

function MissionContainer({ setId }: any) {

    const { data, error, loading } = useMissionsInfoQuery();

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

    console.log(data)

    return (

        <div>
            <MissionList
                data={data}
                setId={setId} />
        </div>
    )
}

export default MissionContainer
