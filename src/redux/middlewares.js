// Middleware to log action types
export const actionTypeLogger = (store) => (next) => (action) => {
    console.log('Action Type:', action.type);
    return next(action);
  };

  // Middleware to log action payloads
export const payloadLogger = (store) => (next) => (action) => {
    if (action.payload) {
      console.log('Payload:', action.payload);
    }
    return next(action);
  };
  