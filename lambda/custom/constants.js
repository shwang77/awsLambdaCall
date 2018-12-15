module.exports = {
  interfaces: {
    sizeStandardsHostName: 'mint.ussba.io'
  },
  ErrorIntent: {
    message: 'Sorry, I didn\'t catch that. How can I help?'
  },
  CancelAndStopIntent: {
    message: 'Good luck with your business!'
  },
  LaunchRequestIntent: {
    welcomeText: 'Welcome to the S. B. A. Voice Assistant, how can I help?'
  },
  UnderstandTerminologyIntent: {
    unknown: "I'm sorry, I'm not familiar with that term",
    returnToPreviousAmIASmallBusinessIntent: 'Ask me if you are a small business if you would like to continue that process'
  },
  AmIASmallBusinessIntent: {
    errorMessage: "Sorry, I wasn't able to determine your business size. Could you try asking again?",
    positive: 'Congratulations, your business qualifies as small. You may be eligible to participate in government contracting programs and compete for contracts reserved or set aside for small businesses.',
    negative: "I'm sorry, this business does not qualify as a small business",
    badEmployeeCount: "Sorry, I didn't get that. How many employees does your business employ?",
    badReceipts: "Sorry, I didn't get that. What amount of annual receipts does your business have?",
    badNaicsCode: "I'm sorry, I don't recognize that naics code. Could you try a different naics code?",
    badNaicsCodeNotAumber: "Sorry, I don't recognize that naics code. What is your six digit naics code?",
    unableToHelp: "Sorry, but I can't help with that right now."
  },
  HelpIntent: {
    message: 'The S. B. A. Voice Assistant helps determine if your business meets the small business size standards. You can say things like am I a small business to see if you qualify.'
  }
}
