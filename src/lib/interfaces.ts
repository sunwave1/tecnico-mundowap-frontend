export interface ViaCep {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export interface CepRequestError {
    erro: string;
}

export interface CepRequest {
    data: ViaCep | CepRequestError | null;
    isLoading: boolean;
    error: string | null;
}

export interface Addresses {
    cep: string;
    city: string;
    uf: string;
    sublocality: string;
    street: string;
    street_number: string;
}

export interface Visit {
    date: string;
    completed: 1 | 0;
    forms: number;
    products: number;
    duration: number;
    address: Addresses;
}
