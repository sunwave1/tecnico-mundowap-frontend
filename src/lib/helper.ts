import { format, parseISO, isValid } from "date-fns";
import { ptBR } from "date-fns/locale";

type FormatTypes = "EEEEEE. dd/MM/yyyy" | "dd/MM/yyyy";

const FORMMINUTE_VALUE = 15;
const PRODMINUTE_VALUE = 5;

const formatDate = (
    date: string | Date,
    capitalizeFirstLetter = false,
    fmt: FormatTypes = "EEEEEE. dd/MM/yyyy",
) => {
    const dateParsed = typeof date === "string" ? parseISO(date) : date;
    let result = isValid(dateParsed)
        ? format(dateParsed, fmt, { locale: ptBR })
        : "Invalid Date";

    if (capitalizeFirstLetter) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    return result;
};

const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const parts = [];

    if (hours > 0) {
        parts.push(`${hours}h`);
    }

    if (mins > 0) {
        parts.push(`${mins}min`);
    }

    if (secs > 0) {
        parts.push(`${secs}s`);
    }

    return parts.join(" ") || "0 minutos";
};

const calculateDuration = (forms: number, products: number) => {
    return (forms * FORMMINUTE_VALUE + products * PRODMINUTE_VALUE) * 60;
};

export const Helper = {
    formatDate,
    formatTime,
    calculateDuration,
};
