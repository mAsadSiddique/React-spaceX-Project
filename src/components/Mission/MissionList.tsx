import React from 'react';
import { MissionsInfoQuery } from '../../generated/graphql';

interface Props {
    data: MissionsInfoQuery
}

const MissionList: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <ul>
                {data.launches?.map((launchesObj, ind) => {
                    return (
                        <li key={ind}>
                            {launchesObj?.mission_name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MissionList;
