const validate = (schema) => async (req, res, next) => {
    try {
      const parsedBody = await schema.parseAsync(req.body);
      req.body = parsedBody;
      next();
    } catch (err) {
      const status = 422;
      const message = "Invalid input data";
      const extraDetails = err.errors[0].message;
  
      const error = {
        status,
        message,
        extraDetails,
      }
      next(error);
    }
  };
  
  export default validate;