import { useState } from "react";
import { HeaderStyle } from "./styled";
import Button from "../Button/Button";
import Row from "../Flex/Row";
import VisitModal from "../VisitModal";
import { useVisit } from "../../store/visit";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { addVisit, makeVisitByForm, isDurationValidForVisit } = useVisit();

    return (
        <HeaderStyle>
            <Row justify="between" spacing={"lg"}>
                <div />
                <div>
                    <Button
                        variant="secondary"
                        spacing={{ px: "28px", py: "16px" }}
                        rounded="lg"
                        onClick={() => setIsOpen(true)}
                    >
                        CRIAR VISITA
                    </Button>
                </div>
            </Row>

            <VisitModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onCreate={(data, resetForm) => {
                    if (
                        !isDurationValidForVisit(
                            data.date,
                            parseInt(data.forms),
                            parseInt(data.products),
                        )
                    ) {
                        return;
                    }

                    const visit = makeVisitByForm(data);
                    addVisit(visit);
                    resetForm?.();
                    setIsOpen(false);
                }}
                title={"Criar Visita"}
            />
        </HeaderStyle>
    );
}
