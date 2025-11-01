import Button from "../Button/Button";
import Row from "../Flex/Row";
import { HeaderStyle } from "./styled";

export default function Header() {
    return (
        <HeaderStyle>
            <Row justify="between" spacing={"lg"}>
                <div></div>
                <div>
                    <Button
                        variant="secondary"
                        spacing={{ px: "28px", py: "16px" }}
                        rounded="lg"
                    >
                        CRIAR VISITA
                    </Button>
                </div>
            </Row>
        </HeaderStyle>
    );
}
