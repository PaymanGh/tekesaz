export async function POST(req: Request) {
  const body = await req.json();

  const { name, phone, area } = body;

  await fetch(
    `https://api.telegram.org/bot8684708294:AAHIkmx18uLcNM__ZIRR2ey8PiP8SB95j2g/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: '7995801868',
        text: `
🏗 تکه‌ساز - درخواست جدید

👤 نام: ${name}
📱 موبایل: ${phone}
📐 متراژ: ${area}
      `,
      }),
    }
  );

  return Response.json({ ok: true });
}
