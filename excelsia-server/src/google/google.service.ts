import { Injectable, Res } from '@nestjs/common'

@Injectable()
export class GoogleService {
  readConfig(): string {
    let packageJson = require('../../package.json')
    return packageJson.version
  }

  redirectGoogleDrive(): string {
    return 'https://drive.google.com/drive/'
  }
}
