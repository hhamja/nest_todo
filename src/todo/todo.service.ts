import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './model/todo';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    // Todo Repository DI
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  createTodo(title: string, content: string) {
    const todo = this.todoRepository.create({
      title: title,
      content: content,
    });

    const newTodo = this.todoRepository.save(todo);
    return newTodo;
  }

  // 모든 Todo 리스트 가져오기
  async fetchTodos() {
    return this.todoRepository.find();
  }

  // 특정 Todo 정보 가져오기
  async fetchTodo(id: number) {
    return this.todoRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  // 특정 Todo 수정하기
  async updateTodo(id: number, title: string, content: string) {
    const todo: Todo = await this.todoRepository.findOne({
      where: {
        id: id,
      },
    });

    if (title) {
      todo.title = title;
    }
    if (content) {
      todo.content = content;
    }

    const newTodo = await this.todoRepository.save(todo);

    return newTodo;
  }

  // 특정 Todo 삭제
  async removeTodo(id: number) {
    return await this.todoRepository.delete(id);
  }
}
