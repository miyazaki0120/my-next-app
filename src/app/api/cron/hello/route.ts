import { NextResponse } from 'next/server';

export async function GET() {
  console.log("Cron job executed at", new Date().toISOString());

  // ここにCronで実行したい処理を書く
  // 例: データ更新、ログ記録、外部API呼び出しなど

  return NextResponse.json({ message: 'Cron executed successfully' });
}
