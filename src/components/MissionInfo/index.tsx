import React from 'react';
import { useLaunchProfileQuery, Mission } from '../../generated/graphql';
import MissionInfo from './MissionInfo';

interface Props {
    Id: String,
}

const MissionInfoContainer: React.FC<Props> = (Id : any) => {
    // console.log("ID", Id)
    const { data, loading, error } = useLaunchProfileQuery({
        variables: { id: Id.id },
    });

    if (loading)
        return <h2>loading</h2>

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
