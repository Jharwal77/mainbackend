class ApiError extends Error {
    constructor(
        statusCode,
        message='Something went wrong',
        errors=[],
        stack=" "
    ){
        // console.log("yes it is me ApiError.js")
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
      
        if (stack) {
            this.stack=stack
        }else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export { 
    ApiError,
 }