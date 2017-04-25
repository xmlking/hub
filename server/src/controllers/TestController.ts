import {Service} from 'typedi';
import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, Req, Res} from 'routing-controllers';
import User from '../model/User';

@Service()
@JsonController()
export class TestController {

  @Get('/users')
  async getAll() {
    return await User.findAll();
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return {result: 'This action returns user #' + id};
  }

  @Post('/users')
  post(@Body() user: any) {
    return {result: 'Saving user...'};
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return {result: 'Updating a user...'};
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return {result: 'Removing user...'};
  }

  @Get('/users/error')
  error() {
    throw new Error('test');
  }
}
