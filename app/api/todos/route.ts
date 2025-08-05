import { prisma } from '@/utils/prisma';
import { NextResponse } from 'next/server';

// GET - Fetch all todos
export async function GET() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(todos);
}

// POST - Create a new todo
export async function POST(req: Request) {
  const { title } = await req.json();
  const newTodo = await prisma.todo.create({
    data: { title },
  });
  return NextResponse.json(newTodo);
}

// PUT - Update title or completed
export async function PUT(req: Request) {
  const body = await req.json();
  const { id, completed, title } = body;

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      ...(completed !== undefined && { completed }),
      ...(title !== undefined && { title }),
    },
  });

  return NextResponse.json(updatedTodo);
}

// DELETE - Remove a todo
export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
