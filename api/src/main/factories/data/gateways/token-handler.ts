import { env } from "../../../config/env"
import { JwtTokenHandler } from "../../../../data/gateways"

export const makeJWTtokenHandler = (): JwtTokenHandler => {
  return new JwtTokenHandler(env.jwtSecret)
}