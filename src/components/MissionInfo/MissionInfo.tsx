import React from 'react'
import { MissionsInfoQuery } from '../../generated/graphql';

interface Props {
    data: MissionsInfoQuery
}

const MissionInfo: React.FC<Props> = ({ data }) => {
    console.log(data);
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default MissionInfo;
