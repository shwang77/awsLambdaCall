const axios = require('axios')
const constants = require('../constants.js')

function isSmallBusiness (naics, receipts, employees) {
  const id = naics
  const revenue = receipts || undefined
  const employeeCount = employees || undefined
  let params = {
    url: 'https://' + constants.interfaces.sizeStandardsHostName + '/isSmallBusiness',
    params: {
      id,
      revenue,
      employeeCount
    },
    timeout: 1000
  }
  console.log('Making request to SizeStandards API', params)
  return axios
    .request(params)
    .then(result => {
      console.log('Result was: ', result.status, result.data)
      if (result && result.status < 400 && (result.data === 'true' || result.data === 'false')) {
        let isSmallBusiness = result.data === 'true'
        return isSmallBusiness
      } else {
        console.log('Error accessing /isSmallBusiness', result)
        throw new Error('Failed to determine small business status')
      }
    })
}

function fetchNaics (naics) {
  let uri = `https://${constants.interfaces.sizeStandardsHostName}/naics/${naics}`
  console.log('Making request to SizeStandards API', uri)
  return axios
    .get(uri, { timeout: 1000 })
    .then(result => {
      console.log('Result was: ', result.status, result.data)
      if (result) {
        if (result.status < 400) {
          if (result.data && result.data.errorMessage) {
            if (result.data.errorMessage === 'Invalid ID - No NAICS exists for the given id') {
              return null
            } else {
              console.log('Error accessing /naics', result.errorMessage)
              throw new Error('Failed to fetch naics data')
            }
          } else {
            return result.data
          }
        } else if (result.status === 400) {
          return null
        } else if (result.status === 404) {
          console.log('Error accessing /naics', result)
          throw new Error('Failed to fetch naics data')
        } else if (result.status === 500) {
          console.log('Error accessing /naics', result)
          throw new Error('Failed to fetch naics data')
        }
      } else {
        console.log('Error accessing /naics', result)
        throw new Error('Failed to fetch naics data')
      }
    })
    .catch(err => {
      console.error(err)
      throw new Error('Failed to fetch naics data')
    })
}

module.exports.isSmallBusiness = isSmallBusiness
module.exports.fetchNaics = fetchNaics
