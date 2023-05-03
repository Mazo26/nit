export const getScreenWidth = () => {
  let screenWidth = window.innerWidth;

  if (screenWidth < 481) {
    return "SM";
  } else if (screenWidth < 769) {
    return "MD";
  } else {
    return "LG";
  }
};

export function generateId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
