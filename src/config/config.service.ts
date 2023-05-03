import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    this.envConfig = process.env;
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getMongoConfig(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      url: this.get('MONGODB_URI'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    };
  }

  getJwtSecret(): string {
    return this.get('JWT_SECRET');
  }
}
