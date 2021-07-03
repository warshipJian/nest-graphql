import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [UsersModule],
})
export class ApplicationModule {}
