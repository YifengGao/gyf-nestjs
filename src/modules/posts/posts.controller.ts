import { Controller, Get, Req, Query, Headers, Param, Post, Body, HttpException, HttpStatus, ForbiddenException} from '@nestjs/common';
import { Request } from 'express';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';


@Controller('posts')
export class PostsController {
  constructor(private readonly demoService: DemoService){}

  @Get()
  index(){
    return this.demoService.findAll();
  }

  @Get(':id')
  show(@Param() params){
    return{
      title: `Post ${params.id}`
    }
  }
  
  @Post()
  store(@Body() post: CreatePostDto) {
    throw new ForbiddenException('没有权限！');
    // throw new HttpException('没有权限！', HttpStatus.FORBIDDEN);
    // this.demoService.create(post);
  }
}
