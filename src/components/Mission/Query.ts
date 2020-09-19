import gql from 'graphql-tag';



export const LaunchesInfo = gql`
query LaunchesInfo{
    launches {
      mission_id
      mission_name
      launch_success
      launch_year
    }
  }
  

`