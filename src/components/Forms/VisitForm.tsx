import Col from "../Flex/Col";
import Row from "../Flex/Row";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { Error } from "../Error/styled";
import { Form } from "../Form/styled";
import { useCep } from "../../hooks/cep";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisitFormData, visitSchema } from "../../lib/zod.schema";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Visit } from "../../lib/interfaces";

export interface VisitFormRef {
    submit: () => void;
    resetForm: () => void;
    getValues: () => VisitFormData;
    isSubmitting: boolean;
}

interface VisitFormProps {
    visit?: Visit | null;
    onCreateSubmit?: (data: VisitFormData) => void;
    onUpdateSubmit?: (data: VisitFormData, visit: Visit) => void;
}

export const VisitForm = forwardRef<VisitFormRef, VisitFormProps>(
    ({ onCreateSubmit, onUpdateSubmit, visit }, ref) => {
        const { findLocation, data, clearData, ok, isLoading } = useCep();
        const [forceBlock, setForceBlock] = useState<{
            street: boolean;
            sublocality: boolean;
        }>({
            street: false,
            sublocality: false,
        });
        const {
            register,
            handleSubmit,
            formState: { errors, isSubmitting },
            setValue,
            reset,
            watch,
            getValues,
            clearErrors,
        } = useForm<VisitFormData>({
            resolver: zodResolver(visitSchema),
            defaultValues: {
                date: "",
                forms: "",
                products: "",
                cep: "",
                uf: "",
                city: "",
                street: "",
                sublocality: "",
                street_number: "",
            },
        });

        const postalCode = watch("cep");

        const onSubmit = (data: VisitFormData) => {
            if (visit) {
                onUpdateSubmit?.(data, visit);
            } else {
                onCreateSubmit?.(data);
            }
        };

        useImperativeHandle(ref, () => ({
            submit: () => {
                handleSubmit(onSubmit)();
            },
            resetForm: () => {
                reset();
            },
            getValues: () => {
                return getValues();
            },
            isSubmitting: isSubmitting,
        }));

        useEffect(() => {
            if (!postalCode || (postalCode && postalCode.length !== 8)) {
                if (visit) {
                    reset({
                        uf: "",
                        city: "",
                        sublocality: "",
                        street: "",
                        street_number: "",
                    });
                }
                clearData();
                return;
            }
            if (visit && visit.address.cep === postalCode) return;
            findLocation(postalCode);
        }, [postalCode, findLocation, clearData, visit, reset]);

        useEffect(() => {
            if (!data) {
                reset({
                    uf: "",
                    city: "",
                    sublocality: "",
                    street: "",
                    street_number: "",
                });
                return;
            }
            setValue("uf", data.uf);
            setValue("city", data.localidade);
            setValue("sublocality", data.bairro);
            setValue("street", data.logradouro);
            clearErrors(["uf", "city", "sublocality", "street"]);
            setForceBlock((prev) => ({
                ...prev,
                street: data.logradouro !== "",
                sublocality: data.bairro !== "",
            }));
        }, [data, setValue, reset, clearErrors]);

        useEffect(() => {
            if (!visit) return;
            setValue("date", visit.date);
            setValue("forms", visit.forms.toString());
            setValue("products", visit.products.toString());
            setValue("cep", visit.address.cep);
            setValue("uf", visit.address.uf);
            setValue("city", visit.address.city);
            setValue("street", visit.address.street);
            setValue("sublocality", visit.address.sublocality);
            setValue("street_number", visit.address.street_number);
        }, [visit, setValue]);

        return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Col gap="24px" margin={{ mb: "32px" }}>
                    <Col>
                        <Label
                            htmlFor="visita"
                            fontSize="14px"
                            fontWeight="medium"
                        >
                            Data da visita
                        </Label>
                        <Input
                            {...register("date")}
                            type="date"
                            placeholder="Data da visita"
                            $rounded="md"
                            id="visita"
                        />
                        {errors.date && <Error>{errors.date.message}</Error>}
                    </Col>
                    <Row gap="6px">
                        <Col grow={1}>
                            <Label
                                htmlFor="qtdForms"
                                fontSize="14px"
                                fontWeight="medium"
                            >
                                Quantidade de Formulários
                            </Label>
                            <Input
                                {...register("forms")}
                                placeholder="Quantidade de Formulários"
                                $rounded="md"
                                id="qtdForms"
                            />
                            {errors.forms && (
                                <Error>{errors.forms.message}</Error>
                            )}
                        </Col>
                        <Col grow={1}>
                            <Label
                                htmlFor="qtdProducts"
                                fontSize="14px"
                                fontWeight="medium"
                            >
                                Quantidade de Produtos
                            </Label>
                            <Input
                                {...register("products")}
                                placeholder="Quantidade de Produtos"
                                $rounded="md"
                                id="qtdProducts"
                            />
                            {errors.products && (
                                <Error>{errors.products.message}</Error>
                            )}
                        </Col>
                    </Row>
                    <Col>
                        <Label
                            htmlFor="cep"
                            fontSize="14px"
                            fontWeight="medium"
                        >
                            Cep
                        </Label>
                        <Input
                            {...register("cep")}
                            placeholder="Cep"
                            $rounded="md"
                            id="cep"
                            disabled={isLoading}
                        />
                        {errors.cep && <Error>{errors.cep.message}</Error>}
                    </Col>
                    <Row gap="6px">
                        <Col grow={1}>
                            <Label
                                htmlFor="uf"
                                fontSize="14px"
                                fontWeight="medium"
                            >
                                UF
                            </Label>
                            <Input
                                {...register("uf")}
                                placeholder="UF"
                                $rounded="md"
                                id="uf"
                                disabled={true}
                            />
                            {errors.uf && <Error>{errors.uf.message}</Error>}
                        </Col>
                        <Col grow={1}>
                            <Label
                                htmlFor="cidade"
                                fontSize="14px"
                                fontWeight="medium"
                            >
                                Cidade
                            </Label>
                            <Input
                                {...register("city")}
                                placeholder="Cidade"
                                $rounded="md"
                                id="cidade"
                                disabled={true}
                            />
                            {errors.city && (
                                <Error>{errors.city.message}</Error>
                            )}
                        </Col>
                    </Row>
                    <Col>
                        <Label
                            htmlFor="bairro"
                            fontSize="14px"
                            fontWeight="medium"
                        >
                            Bairro
                        </Label>
                        <Input
                            {...register("sublocality")}
                            placeholder="Bairro"
                            $rounded="md"
                            id="bairro"
                            disabled={
                                !ok || isLoading || forceBlock.sublocality
                            }
                        />
                        {errors.sublocality && (
                            <Error>{errors.sublocality.message}</Error>
                        )}
                    </Col>
                    <Col>
                        <Label
                            htmlFor="logradouro"
                            fontSize="14px"
                            fontWeight="medium"
                        >
                            Logradouro
                        </Label>
                        <Input
                            {...register("street")}
                            placeholder="Logradouro"
                            $rounded="md"
                            id="logradouro"
                            disabled={!ok || isLoading || forceBlock.street}
                        />
                        {errors.street && (
                            <Error>{errors.street.message}</Error>
                        )}
                    </Col>
                    <Col gap="6px">
                        <Label
                            htmlFor="numero"
                            fontSize="14px"
                            fontWeight="medium"
                        >
                            Número
                        </Label>
                        <Input
                            {...register("street_number")}
                            placeholder="Número"
                            $rounded="md"
                            id="numero"
                            disabled={isLoading}
                        />
                        {errors.street_number && (
                            <Error>{errors.street_number.message}</Error>
                        )}
                    </Col>
                </Col>
            </Form>
        );
    },
);
