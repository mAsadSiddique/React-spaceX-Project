import React from 'react';
import { MissionsInfoQuery } from '../../generated/graphql';
import { Button } from 'react-bootstrap'
interface Props {
    data: MissionsInfoQuery
    setId: any
}

const MissionList: React.FC<Props> = ({ data, setId }) => {

    return (
        <div>
            <ul className="mission-list">
                <h3>Mission List</h3>
                {data.launches?.map((launchesObj, ind) => {
                    return (
                        <li key={ind}>
                            <Button variant="outline-primary" className="btn" onClick={() => { setId((ind + 1).toString()) }}
                            >
                                {launchesObj?.mission_name}
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MissionList;
