import { useState } from "react";
import { HeaderStyle } from "./styled";
import Button from "../Button/Button";
import Row from "../Flex/Row";
import VisitModal from "../VisitModal";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
                title={"Criar Visita"}
            />
        </HeaderStyle>
    );
}
