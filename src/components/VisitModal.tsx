import { useRef } from "react";
import { Visit } from "../lib/interfaces";
import Button from "./Button/Button";
import { Modal } from "./Dialog/Dialog";
import Row from "./Flex/Row";
import { VisitForm, VisitFormRef } from "./Forms/VisitForm";

interface VisitModalProps {
    title: string;
    isOpen: boolean;
    visit?: Visit;
    onClose: () => void;
    onCreate?: () => void;
    onUpdate?: () => void;
}

export default function VisitModal({
    title,
    isOpen,
    visit,
    onCreate,
    onUpdate,
    onClose,
}: VisitModalProps) {
    const formRef = useRef<VisitFormRef>(null);
    return (
        <Modal.Root isOpen={isOpen}>
            <Modal.Overlay />
            <Modal.Container
                sizes="medium"
                rounded="lg"
                spacing={{ px: "22px", py: "12px" }}
            >
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <Modal.Closer onClick={onClose} />
                </Modal.Header>

                <VisitForm ref={formRef} />

                <Row justify="end" gap="6px" margin={{ mt: "8px" }}>
                    <Button
                        variant="accent"
                        spacing={{ px: "28px", py: "16px" }}
                        rounded="lg"
                        onClick={onClose}
                    >
                        CANCELAR
                    </Button>
                    <Button
                        variant="secondary"
                        spacing={{ px: "28px", py: "16px" }}
                        rounded="lg"
                        onClick={() => formRef.current?.submit()}
                    >
                        CRIAR VISITA
                    </Button>
                </Row>
            </Modal.Container>
        </Modal.Root>
    );
}
