import { CalendarIcon } from "@heroicons/react/24/outline";
import { Text } from "../Text/Text";
import { theme } from "../../styles/theme";
import Col from "../Flex/Col";
import Row from "../Flex/Row";
import Button from "../Button/Button";

interface HeaderProps {
    date: string;
    visitCount: number;
    onClose?: () => void;
}

export default function Header({ date, visitCount, onClose }: HeaderProps) {
    return (
        <Row justify="between" align="center">
            <Col>
                <Row align="center" gap={"12px"}>
                    <CalendarIcon
                        width={24}
                        height={24}
                        color={theme.colors.secondary}
                    />
                    <Text color="black" size={"24px"} weight="semibold">
                        {date}
                    </Text>
                </Row>
                {visitCount >= 1 ? (
                    <Text color="muted" size={"medium"} weight="semibold">
                        {visitCount > 1
                            ? `${visitCount} visitas totais`
                            : `${visitCount} visita apenas`}
                    </Text>
                ) : (
                    <Text color="muted" size={"medium"} weight="semibold">
                        Nenhuma visita agendada
                    </Text>
                )}
            </Col>
            <div>
                <Button
                    variant="secondary"
                    spacing={{ px: "16px", py: "16px" }}
                    rounded="md"
                    onClick={onClose}
                >
                    FECHAR DATA
                </Button>
            </div>
        </Row>
    );
}
