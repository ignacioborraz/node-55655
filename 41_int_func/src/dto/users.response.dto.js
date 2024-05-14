import { createHash } from "../config/hash.js";

export default class UserResponseDTO {
  static getUserDbFrom = (user) => {
    return {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
      email: user.email,
      role: user.role
    };
  };
}
