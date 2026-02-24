/**
 * @project AncestorTree
 * @file src/app/(main)/people/new/page.tsx
 * @description New person creation page
 * @version 1.0.0
 * @updated 2026-02-24
 */

'use client';

import { useCreatePerson } from '@/hooks/use-people';
import { PersonForm } from '@/components/people/person-form';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import type { PersonFormData } from '@/lib/validations/person';

export default function NewPersonPage() {
  const router = useRouter();
  const createMutation = useCreatePerson();

  const handleSubmit = async (data: PersonFormData) => {
    try {
      const person = await createMutation.mutateAsync(data);
      toast.success('Đã thêm thành công');
      router.push(`/people/${person.id}`);
    } catch {
      toast.error('Lỗi khi thêm mới');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/people">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Thêm thành viên mới</h1>
      </div>

      <PersonForm 
        onSubmit={handleSubmit} 
        isLoading={createMutation.isPending} 
      />
    </div>
  );
}
