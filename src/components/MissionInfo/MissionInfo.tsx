import React from 'react'
import { LaunchProfileQuery } from '../../generated/graphql';
import Image from 'react-bootstrap/Image'
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
                <span className="launch-site">
                    <strong>
                        {
                            data.launch?.launch_site?.__typename
                        }
                    </strong>
                    <strong >
                        {
                            data.launch?.launch_site?.site_name
                        }
                    </strong>
                </span>
                <span className="mission-year">
                    <strong>
                        Mission Year
                </strong>
                    <strong>
                        {data.launch?.launch_year}
                    </strong>
                </span>

                <span className="mission-launched">
                    <strong>
                        This Mission
                </strong>
                    <strong>
                        {data.launch?.launch_success ? "Successfully Launched" : "get Failed"}
                    </strong>
                </span>

                <span className="img-container">
                    <h4>These Pics are taken during Launching</h4>
                    {data.launch?.links?.flickr_images?.length !== 0 ?
                        data.launch?.links?.flickr_images?.map((img, ind) => {

                            return (

                                <Image
                                    className="img"
                                    src={img?.toString()}
                                    alt="img"
                                    fluid />

                            )
                        }) :
                        <h1>Images Not Available</h1>
                    }
                </span>
            </div>


        </div >
    )
}

export default MissionInfo;
