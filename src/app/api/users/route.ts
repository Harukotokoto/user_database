import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Users from '@/lib/models/users'
import { connectDB } from '@/lib/functions/connectDB'

export async function GET(request: Request) {
  await connectDB()

  const users = await Users.find()

  return NextResponse.json(users)
}
