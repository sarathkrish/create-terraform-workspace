const core = require('@actions/core');
const axios = require('axios');

try{
    const workSpaceName = core.getInput('workSpaceName');
    const organizationName = core.getInput('organizationName');
    const token = core.getInput('terraformToken');
    let request = { data : { attributes: { name : workSpaceName, type: "workspaces"}}};
    console.log("request:" + JSON.stringify(request));

    const terraformEndpoint = "https://app.terraform.io/api/v2/organizations/"+organizationName+"/workspaces";
    const options = {
        headers: {'Content-Type': 'application/vnd.api+json',
                  'Authorization': 'Bearer '+token
                }       
    };
   // Invoking Terraform API
    axios.post(terraformEndpoint, request, options)
      .then((response) => {
        console.log("success:"+ JSON.stringify(response.data));
        core.setOutput("workSpaceId", response.data.data.id);
      }, (error) => {
        console.error("error:"+JSON.stringify(error.response.data));
        core.setFailed(error.message);
      });

} catch(error){
    core.setFailed(error.message);
}