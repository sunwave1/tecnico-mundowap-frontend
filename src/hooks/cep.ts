import { useCallback, useState } from "react";
import { fetchClient } from "../api/client";
import { CepRequest, ViaCep, CepRequestError } from "../lib/interfaces";

export const useCep = () => {
    const [data, setData] = useState<CepRequest>({
        data: null,
        isLoading: false,
        error: null,
        ok: false,
    });

    const setProperty = (
        key: keyof CepRequest,
        value: string | boolean | null | ViaCep | CepRequestError | null,
    ) => {
        setData((prev) => ({ ...prev, [key]: value }));
    };

    const findLocation = useCallback(async (postalCode: string) => {
        setProperty("isLoading", true);
        try {
            const response = await fetchClient<ViaCep>(
                `https://viacep.com.br/ws/${postalCode}/json/`,
            );

            if ("erro" in response.data && response.data.erro === "true") {
                throw new Error("Cep não encontrado!");
            }

            setProperty("data", response.data);
            setProperty("ok", true);
        } catch (error) {
            setProperty("ok", false);
            setProperty(
                "error",
                error instanceof Error ? error.message : "Erro ao buscar CEP",
            );
        } finally {
            setProperty("isLoading", false);
        }
    }, []);

    const clearData = useCallback(() => {
        setData((prev) => ({ ...prev, data: null, error: null, ok: false }));
    }, []);

    return {
        ...data,
        findLocation,
        clearData,
    };
};
