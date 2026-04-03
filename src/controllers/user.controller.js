
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User} from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler (async (req, res) =>{
    // res.status(200).json({
    //     message: "ok || RAHUL JHARWAL"
    // })

// })
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for image, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const { fullName, email , username, password} = req.body
    // console.log(req.body)
    // console.log("email", email)

    // if (fullName === "") {
    //     throw new ApiError(400, "fullName is required")
    // }
    // console.log("file: ",req.files)
    if (
        [fullName, email, username, password].some((field) => 
            field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    // console.log([fullName, email, username, password].some((field) => 
    //         field?.trim() === ""))
    const existedUser =await User.findOne({
        $or: [{username}, { email}]
    })

    // console.log(existedUser)

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }
    // console.log(req.files)


    const avatarLocalPath = req.files?.avatar[0]?.path;
    // console.log(avatarLocalPath)
    
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path;    
    }

//    console.log(coverImageLocalPath)

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }


    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    // console.log(avatar);

    // console.log(coverImage)
    if (!avatar) {
        throw new ApiError(400, "Avatar file is required");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    })
    // console.log(user)

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
   
    // console.log(createdUser)

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }
     
    // console.log(res.status(201).json(
    //     new ApiResponse(200, createdUser, "User register successfully")
    // ))
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User register successfully")
    );
})


export { 
    registerUser,
    
}