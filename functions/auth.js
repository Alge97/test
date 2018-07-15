import oauth2, { config } from './utils/oauth'

exports.handler = (event, context, callback) => {
  // Authorization uri definition
  const authorizationURI = oauth2.authorizationCode.authorizeURL({
    redirect_uri: config.redirect_uri,
    /* Specify how your app needs to access the user’s account. http://bit.ly/intercom-scopes */
    scope: '',
    /* State helps mitigate CSRF attacks & Restore the previous state of your app */
    state: '',
  })

  /* redirect user to intercom authorizationURI login */
  const response = {
    statusCode: 301,
    headers: {
      Location: authorizationURI,
      /* Disable caching of this response. */
      'Cache-Control': 'no-cache'
    }
  }

  return callback(null, response)
}
