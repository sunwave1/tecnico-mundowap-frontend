import { z } from "zod";

export const visitSchema = z.object({
    date: z.string().min(1, "Data da visita é obrigatória"),
    forms: z.string().min(1, "Quantidade de formulários é obrigatória"),
    products: z.string().min(1, "Quantidade de produtos é obrigatória"),
    cep: z.string().min(8, "CEP deve ter 8 caracteres").max(9),
    uf: z.string().min(2, "UF é obrigatória").max(2),
    city: z.string().min(1, "Cidade é obrigatória"),
    street: z.string().min(1, "Logradouro é obrigatório"),
    sublocality: z.string().min(1, "Bairro é obrigatório"),
    street_number: z.string().min(1, "Número é obrigatório"),
});

export type VisitFormData = z.infer<typeof visitSchema>;
