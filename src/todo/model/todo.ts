import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  // 제목
  @Column()
  title: string;
  // 세부 내용
  @Column()
  content: string;
  // 업데이트 일자
  @UpdateDateColumn()
  updatedAt: string;
  // 생성일자
  @CreateDateColumn()
  createdAt: string;
}
