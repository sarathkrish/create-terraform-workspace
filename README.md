# Terraform Workspace action

This action create Terraform Workspace in Terraform Cloud using Terraform API  
https://app.terraform.io/api/v2/organizations/YourOrganization/workspaces"  
API reference: https://www.terraform.io/docs/cloud/api/workspaces.html  

## Inputs

### `workSpaceName`

**Required** The name of the workspace.

### `organizationName`

**Required** Your Organization.

### `terraformToken`

**Required** Your Terraform token. Please use secret to store your Terraform token.

 ### `terraformHost`

**Required** This is the Terraform Host Name. For Tarraform cloud its app.terraform.io.

## Outputs

### `workSpaceId`

 The workspaceId for the workspace created.

## Example usage

```
uses: sarathkrish/terraform-workspace@v1.1   
with:  
  workSpaceName: MyTestWorkspace  
  organizationName: {{env.organization}}  
  terraformToken: {{secrets.Terraform_Token}}
  terraformHost: 'app.terraform.io'

```