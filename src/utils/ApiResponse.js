class ApiResponse {
    constructor(statusCode, data, message= "Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400
    }
}
// console.log("yes it is me ApiResponse.js")
export {
    ApiResponse,
}