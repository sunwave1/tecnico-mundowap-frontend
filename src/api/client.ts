import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const fetchClient = async <T = unknown>(
    endpoint: string,
    options: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => {
    const defaultHeaders = {
        "Content-Type": "application/json",
    };

    const mergedOptions: AxiosRequestConfig = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...(options.headers || {}),
        },
        url: endpoint,
    };

    return await axios(mergedOptions);
};
