// Custom middleware logs info to the console telling the request method that the client chose for the fetch request and the URL path it was made to.
const cLog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'DELETE': {
        console.info(`📙${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      default: {
        console.log(`(*)${fgCyan}${req.method} request to ${req.path}`);
      }
    }
  
    next();
  };
  
  exports.cLog = cLog;
  