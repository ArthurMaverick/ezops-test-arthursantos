import {TokenGenerator,TokenValidator} from '../../core/contracts/gateways'
import {JwtPayload, sign, verify} from 'jsonwebtoken'


export class JwtTokenHandler implements TokenGenerator, TokenValidator {
  constructor (private secret: string) {}

  async generate ({key}: TokenGenerator.Input): Promise<TokenGenerator.Output> {
    // const expirationInSeconds = expirationInMs / 1000
    return sign({key}, this.secret)
  }

  async validate ({token}: TokenValidator.Input): Promise<TokenValidator.Output> {
    const payload = verify(token, this.secret) as JwtPayload
    return payload.key
  }
}