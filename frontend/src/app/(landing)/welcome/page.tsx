/**
 * @project AncestorTree (customized)
 * @file src/app/(landing)/welcome/page.tsx
 * @description Minimal landing: login + featured features
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { LogIn, GitBranch, Calendar, Users, Shield, Award, BookOpen, Utensils, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Gia Phả Điện Tử Họ Hoàng - Con Cháu cụ Hiệu Diệu Sân',
  description: 'Gìn giữ tinh hoa - Tiếp bước ông cha.',
  openGraph: {
    title: 'Gia Phả Điện Tử Họ Hoàng - Con Cháu cụ Hiệu Diệu Sân',
    description: 'Gìn giữ tinh hoa - Tiếp bước ông cha.',
    type: 'website',
    locale: 'vi_VN',
  },
};

const features = [
  {
    icon: GitBranch,
    title: 'Cây gia phả tương tác',
    desc: 'Hiển thị nhiều đời, zoom/pan, lọc theo nhánh — trực quan và dễ tra cứu.',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
  {
    icon: Calendar,
    title: 'Lịch âm dương & ngày giỗ',
    desc: 'Chuyển đổi âm-dương, nhắc giỗ chạp theo lịch truyền thống.',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
  },
  {
    icon: Users,
    title: 'Quản lý chi / nhánh',
    desc: 'Phân chia chi-nhánh rõ ràng, tính đời tự động, ghi nhận quan hệ gia đình.',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Vinh danh & quỹ khuyến học',
    desc: 'Ghi nhận thành tích con cháu, quản lý quỹ minh bạch.',
    color: 'text-purple-700',
    bg: 'bg-purple-50',
  },
  {
    icon: BookOpen,
    title: 'Hương ước gia tộc',
    desc: 'Lưu trữ hương ước, quy định dòng họ dạng bài viết.',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
  },
  {
    icon: Utensils,
    title: 'Cầu đương / phân công lễ hội',
    desc: 'Hỗ trợ phân công, xoay vòng công bằng giữa các gia đình.',
    color: 'text-orange-700',
    bg: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: 'Quan hệ gia đình đầy đủ',
    desc: 'Cha mẹ, anh chị em, vợ/chồng, con cái — cập nhật ngay trên hồ sơ.',
    color: 'text-pink-700',
    bg: 'bg-pink-50',
  },
  {
    icon: Shield,
    title: 'Bảo mật & phân quyền',
    desc: 'Phân quyền theo vai trò, bảo vệ dữ liệu cá nhân trong dòng họ.',
    color: 'text-slate-700',
    bg: 'bg-slate-50',
  },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      {/* Top minimal header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌳</span>
          <span className="font-semibold text-gray-900">Gia Phả Điện Tử</span>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Login section */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-2xl">
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center space-y-3">
                <CardTitle className="font-bold tracking-tight">
                  <div className="text-2xl sm:text-3xl md:text-4xl">
                    Gia Phả Điện Tử Họ Hoàng
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl mt-2">
                    Con Cháu cụ Hiệu Diệu Sân
                  </div>
                </CardTitle>

                {/* Slogan: bigger (about 4x vs before) */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
                  Gìn giữ tinh hoa - Tiếp bước ông cha.
                </p>
              </CardHeader>

              <CardContent className="pt-2 pb-8">
                <div className="flex flex-col gap-3 items-center">
                  <Button size="lg" className="w-full sm:w-[360px]" asChild>
                    <Link href="/login">
                      <LogIn className="mr-2 h-5 w-5" />
                      Đăng nhập
                    </Link>
                  </Button>

                  <p className="text-xs text-gray-500 text-center max-w-md">
                    Nếu bạn chưa có tài khoản, hãy liên hệ quản trị dòng họ để được cấp quyền truy cập.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Features */}
        <section className="py-6 md:py-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tính năng nổi bật</h2>
            <p className="text-gray-600 mt-2">
              Tra cứu nhanh, quản lý rõ ràng, lưu giữ bền vững cho nhiều thế hệ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <Card key={f.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className={`w-10 h-10 rounded-lg ${f.bg} flex items-center justify-center mb-3`}>
                    <f.icon className={`h-5 w-5 ${f.color}`} />
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
