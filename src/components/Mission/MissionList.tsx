import React from 'react';
import { MissionsInfoQuery } from '../../generated/graphql';
// import MissionInfoContainer from '../MissionInfo/index';
interface Props {
    data: MissionsInfoQuery
    setId: any
}

const MissionList: React.FC<Props> = ({ data, setId }) => {
    return (
        <div>
            <ul className="mission-list">
                {data.launches?.map((launchesObj, ind) => {
                    return (
                        <li key={ind}>
                            <button className="btn" onClick={() => { setId((ind+1).toString()) }}
                            >
                                {launchesObj?.mission_name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MissionList;
