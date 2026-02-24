/**
 * @project AncestorTree
 * @file src/app/(main)/tree/page.tsx
 * @description Family tree visualization page
 * @version 1.0.0
 * @updated 2026-02-24
 */

'use client';

import { FamilyTree } from '@/components/tree/family-tree';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranchPlus } from 'lucide-react';

export default function TreePage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <GitBranchPlus className="h-6 w-6" />
          Cây Gia Phả
        </h1>
        <p className="text-muted-foreground">
          Sơ đồ phả hệ trực quan - Click vào từng thành viên để xem chi tiết
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Hướng dẫn</CardTitle>
          <CardDescription>
            • <span className="text-blue-500">Viền xanh</span> = Nam • 
            <span className="text-pink-500"> Viền hồng</span> = Nữ • 
            <span className="text-pink-400"> Đường hồng</span> = Vợ chồng • 
            † = Đã mất
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FamilyTree />
        </CardContent>
      </Card>
    </div>
  );
}
