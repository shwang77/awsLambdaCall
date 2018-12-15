# SBA VUI development guide

The VUI prototype is implemented as an AWS Alexa Skill.

### Requirements
1. AWS CLI
2. Amazon Developer Account
3. Node 8.10.0 best to use [NVM](https://github.com/creationix/nvm)
4. Python 2.7 or 3.6

(For the docker inclined, checkout https://github.com/martindsouza/docker-amazon-ask-cli)

### Setup
1. Checkout code with `git clone`
1. Install and select the correct Node version: `nvm install && nvm use`
1. Install ASK CLI: `sudo npm install -g ask-cli` 
1. Install yaml2js `npm install -g yamljs` (required for the build)
1. Install yamllint: `npm install -g yaml-lint` (required for the build)
1. Initialize the ASK CLI: `ask init`

### Updating the code
1. Update the [model](models/en-US.yml)
2. Update the Lambda Code in `lambda/custom`

### Deploying your code
1. `./update` 

### Helpful Documentation
1. ASK CLI: 
    1. https://youtu.be/I-Dw8IpnS2g
    1. https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html
1. Node js SDK
    1. https://ask-sdk-for-nodejs.readthedocs.io/en/latest/
    1. https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
