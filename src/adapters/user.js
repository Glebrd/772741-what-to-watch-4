export const adaptUser = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    avatarURL: user.avatar_url,
  };
};
