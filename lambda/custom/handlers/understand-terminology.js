/* eslint-disable  func-names */
/* eslint-disable  no-console */

const dictionary = require('./dictionary')

const utils = require('../utils')
const text = value => utils.getConstantText('UnderstandTerminologyIntent.' + value)

function findDefinition (requestedTerm) {
  let found = dictionary.find(item => item.terms.indexOf(requestedTerm) !== -1)
  if (!found) {
    return text('unknown')
  }
  return found.definition
}

const UnderstandTerminologyIntentHandler = {
  canHandle (handlerInput) {
    let request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' &&
      request.intent.name === 'UnderstandTerminologyIntent'
  },
  handle (handlerInput) {
    const { intent } = handlerInput.requestEnvelope.request
    const { slots: { term: { value: requestedTerm } } } = intent

    console.log('Providing definition for ' + requestedTerm)
    let definition = findDefinition(requestedTerm)
    console.log('Defintion was found to be ' + definition)

    let responseBuilder = handlerInput.responseBuilder
    responseBuilder = responseBuilder.speak(definition)

    let sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
    let previousAmIASmallBusinessIntent = sessionAttributes.temp_AmIASmallBusinessIntent

    if (previousAmIASmallBusinessIntent) {
      responseBuilder = responseBuilder
        .speak(definition + '  ' + text('returnToPreviousAmIASmallBusinessIntent'))
        .reprompt(text('returnToPreviousAmIASmallBusinessIntent'))
    } else {
      responseBuilder = responseBuilder.speak(definition)
    }

    return responseBuilder.getResponse()
  }
}

module.exports.findDefinition = findDefinition
module.exports.UnderstandTerminologyIntentHandler = UnderstandTerminologyIntentHandler
