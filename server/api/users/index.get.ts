export default defineEventHandler(async (event) => {
  try {
    return await UserSchema.find({})
  }
  catch (error) {
    return error
  }
})
