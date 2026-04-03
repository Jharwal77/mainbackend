const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}
// console.log("yes it is me asyncHandler.js")
export { asyncHandler }


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.Code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }