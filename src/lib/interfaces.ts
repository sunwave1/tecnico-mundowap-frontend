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
