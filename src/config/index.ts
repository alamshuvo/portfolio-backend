import dotenv from 'dotenv'
import path from 'path'
// dotenv.config({path : path.join(process.cwd(), ".env")})
dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  dataBase_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  salt_round: process.env.SALT_ROUND,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expiries_in: process.env.JWT_REFRESH_EXPIRES_IS,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  cloudinary_cloud_name: process.env.CLOUD_NAME,
  reset_Password_ui_link: process.env.RESET_PASSWORD_UI_LINK,
  sp_end_point:process.env.SP_ENDPOINT,
  sp_user_name:process.env.SP_USERNAME,
  sp_password:process.env.SP_PASSWORD,
  sp_prefix:process.env.SP_PREFIX,
  sp_return_url:process.env.SP_RETURN_URL
  
}
