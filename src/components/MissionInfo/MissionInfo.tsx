import React from 'react'
import { LaunchProfileQuery } from '../../generated/graphql';

interface Props {
    data: LaunchProfileQuery
}

const MissionInfo: React.FC<Props> = ({ data }) => {

    console.log("Data", data)
    return (
        <div className="mission-container">
            <div className="mission-details">
                <span className="mission-name">
                    {
                        data.launch?.mission_name
                    }
                </span>
                <span className="mission-year">
                    Mission Year {data.launch?.launch_year}
                </span>

                <span className="mission-launched">
                    <p>This Mission
                        <strong> {data.launch?.launch_success ? "Successfully Launched" : "get Failed"}
                        </strong>
                    </p>
                </span>

                <span>
                    {data.launch?.links?.flickr_images?.map((img, ind) => {

                        return (
                            <img
                                className="img"
                                key={ind}
                                src={img?.toString()}
                                alt="Mission Pics"
                            />
                        )
                    })}
                </span>
            </div>


        </div>
    )
}

export default MissionInfo;
