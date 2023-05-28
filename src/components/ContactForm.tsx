'use client'
import React, { FormEvent } from 'react'
import { SectionTitle } from './SectionTitle'
import { Button } from './Button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Loader } from 'lucide-react'

const constctFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string(),
})

type ContactFormData = z.infer<typeof constctFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(constctFormSchema),
  })

  async function onSubmit(data: ContactFormData) {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso')
    } catch (error) {
      toast.error('Algo deu errado!')
    }
    reset()
  }

  return (
    <section
      id="contact"
      className="px-6 md:py-32 py-16 flex items-center justify-center"
    >
      <div className="w-full max-w-md mx-auto">
        <SectionTitle
          subtitle="Contacto"
          title="Entre em contacto"
          className="text-center items-center"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-12 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nome"
            {...register('name')}
            className="w-full h-14 bg-zinc-800 rounded-lg placeholder:text-zinc-400 px-4 text-zinc-50 focus:outline-none focus:ring-1 ring-emerald-600"
          />
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full h-14 bg-zinc-800 rounded-lg placeholder:text-zinc-400 px-4 text-zinc-50 focus:outline-none focus:ring-1 ring-emerald-600"
          />
          <textarea
            rows={6}
            placeholder="Mensagem"
            {...register('message')}
            className="w-full bg-zinc-800 rounded-lg placeholder:text-zinc-400 p-4 text-zinc-50 focus:outline-none focus:ring-1 ring-emerald-600 resize-none"
          />
          <Button
            disabled={isSubmitting}
            type="submit"
            className="mt-6 shadow-button"
          >
            {!isSubmitting && 'Enviar mensagem'}
            {isSubmitting && (
              <>
                <span>Enviando</span> <Loader className="animate-spin" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
