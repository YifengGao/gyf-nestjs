import { Controller, Get, Req, Query, Headers, Param, Post, Body} from '@nestjs/common';
import { Request } from 'express';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
import { Post } from 'src/posts/interfaces/post.interface';


@Controller('posts')
export class PostsController {
  private readonly demoService;

  constructor(demoService: DemoService){
    this.demoService = demoService;
  }

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
    this.demoService.create(post);
  }
}
