import { Body, Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common'
import { GoogleService } from './google.service'

@Controller('google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  getVersion() {
    return this.googleService.readConfig()
  }

  @Get('upload')
  redirectUpload() {
    return this.googleService.redirectGoogleDrive()
  }

  @Get('download')
  redirectDownload() {
    return this.googleService.redirectGoogleDrive()
  }

}
