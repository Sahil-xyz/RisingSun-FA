const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails || "Error from the Backend";
  
    // For development purpose to understand the errors
    console.log(err);

    return res.status(status).json({ message, extraDetails });
};
  
export default errorMiddleware;