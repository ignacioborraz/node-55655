export default class UserDTO {
  static getUserTokenFrom = (user) => {
    return {
      name: `${user.first_name} ${user.last_name}`,
      role: user.role,
      avatar: user.avatar,
      email: user.email,
    };
  };
}
