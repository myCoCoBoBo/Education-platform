import service from "../utils/request";


export default function loginRequest(data) {
  return service({
    url:"user/login",
    method:"post",
    data,
  })
}
