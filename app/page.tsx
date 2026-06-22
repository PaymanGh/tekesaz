'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendToTelegram = async (form: {
    name: string;
    phone: string;
    area: string;
  }) => {
    try {
      setLoading(true);
      setSuccess(false);

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert('خطا در ارسال اطلاعات');
      }
    } catch (err) {
      alert('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name: (e.target as any).name.value,
      phone: (e.target as any).phone.value,
      area: (e.target as any).area.value,
    };

    sendToTelegram(form);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-slate-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">از یک متر تا یک واحد</h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          مالکیت متری پروژه‌های ساختمانی برای حفظ ارزش سرمایه در برابر تورم
        </p>

        <div className="mt-6 text-sm text-gray-300">
          ۶۰۰ متر زیربنا • ۸ واحد مسکونی • ۳۰۰ متر عرضه اولیه
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">پروژه اول تکه‌ساز</h2>

        <div className="bg-gray-50 p-6 rounded-xl space-y-2">
          <p>🏢 ۸ واحد مسکونی</p>
          <p>📐 ۶۰۰ متر زیربنا</p>
          <p>💰 عرضه اولیه: ۳۰۰ متر</p>
          <p>📊 وضعیت: جذب متقاضی اولیه</p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          دریافت شرایط سرمایه‌گذاری
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            className="w-full border p-3 rounded-lg"
            placeholder="نام و نام خانوادگی"
            required
          />

          <input
            name="phone"
            className="w-full border p-3 rounded-lg"
            placeholder="شماره موبایل"
            required
          />

          <input
            name="area"
            className="w-full border p-3 rounded-lg"
            placeholder="متراژ موردنظر (مثلاً 10 متر)"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-3 rounded-lg font-bold"
          >
            {loading ? 'در حال ارسال...' : 'ثبت درخواست'}
          </button>

          {success && (
            <p className="text-green-600 text-center mt-2">
              درخواست شما با موفقیت ثبت شد ✔
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-500">
        © تکه‌ساز - مالکیت متری پروژه‌های ساختمانی
      </footer>
    </main>
  );
}
