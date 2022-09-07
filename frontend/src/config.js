
const BACK_END_URL = process.env.REACT_APP_BACKEND_API_URL || "https://serverlessblogsapi.azurewebsites.net"
const BACK_END_PORT = process.env.REACT_APP_BACKEND_PORT || "80"

export const API_ENDPOINT = BACK_END_URL+ ":" + BACK_END_PORT