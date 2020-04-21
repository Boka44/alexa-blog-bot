const Alexa = require('ask-sdk-core');

const LaunchRequest = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const answer = 'Hi, I am blog bot, try asking me why did you come here';
        const reprompt = 'Don\'t be shy, I don\'t bite.';

        return handlerInput.responseBuilder
            .speak(answer)
            .reprompt(reprompt)
            .getResponse();
    }
}

const WhyHereIntent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'WhyHereIntent';
    },
    handle(handlerInput) {
        const answer = "I have come here to chew bubblegum and kick ass... and I'm all out of bubblegum.";

        return handlerInput.responseBuilder
            .speak(answer)
            .getResponse();
    }
}

const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
      console.log(error.trace);
  
      return handlerInput.responseBuilder
        .speak('Sorry, I don\'t speak gibberish. Please try again.')
        .getResponse();
    },
  };
  
const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequest,
    WhyHereIntent
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();