export const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
export const randomRGB = () => {
  //Color Generation Function
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};
export const transalate = (words) => {
  switch (words) {
    case "userName":
      return "Nombre";
    case "userAvatar":
      return "";
    case "login":
      return "Nombre de Usuario";
    case "email":
      return "Correo";
    case "location":
      return "Dirección";
    case "name":
      return "Nombre";
    case "url":
      return "Url";
    case "urlProject":
      return "Link de proyecto";
    case "repositories":
      return "Repositorios";
    case "language":
      return "Lenguaje";
    case "followers":
      return "Seguidores";
    case "following":
      return "Siguiendo";
    case "bio":
      return "Biografía";
    case "description":
      return "Descripcción";
    default:
      return " ";
  }
};
