class Alexa {
    constructor(event, context, onLaunchCallback) {
        Alexa.onLaunchCallback = onLaunchCallback;

        try {
            console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);

            if (event.session.new) {
                Alexa.onSessionStarted({ requestId: event.request.requestId }, event.session);
            }

            if (event.request.type === 'LaunchRequest') {
                Alexa.onLaunch(
                    event.request,
                    event.session,
                    (text) => {
                        context.succeed(Alexa.buildResponse(text));
                    }
                );
            }
        } catch (error) {
            context.fail(`Exception: ${error}`);
        }
    }

    static onSessionStarted(sessionStartedRequest, session) {
        console.log(`onSessionStarted: requestId=${sessionStartedRequest.requestId}, sessionId=${session.sessionId}`);
    }

    static onLaunch(launchRequest, session, callback) {
        console.log(`onLaunch: requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);
        this.onLaunchCallback(callback);
    }

    static buildResponse(text) {
        return {
            version: '1.0',
            response: {
                outputSpeech: {
                    text,
                    type: 'PlainText'
                },
                shouldEndSession: true
            }
        };
    }
}

module.exports = Alexa;
