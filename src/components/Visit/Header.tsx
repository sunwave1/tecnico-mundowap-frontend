import Row from "../ui/Flex/Row";
import Badge from "../ui/Badge/Badge";
import { Text } from "../ui/Text/Text";
import { theme } from "../../styles/theme";
import { Visit } from "../../lib/interfaces";
import { Helper } from "../../lib/helper";
import {
    CheckCircleIcon,
    ClockIcon,
    DocumentDuplicateIcon,
    PencilSquareIcon,
    RectangleStackIcon,
    StopCircleIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
    visit: Visit;
    seconds: number;
    onEdit: () => void;
    onComplete: () => void;
}

export default function Header({
    visit,
    seconds,
    onEdit,
    onComplete,
}: HeaderProps) {
    return (
        <Row justify="between" align="center">
            <Row gap={"16px"}>
                <Row align="center" gap={"12px"}>
                    <DocumentDuplicateIcon
                        width={24}
                        height={24}
                        color={theme.colors.secondary}
                    />
                    {visit.forms >= 1 ? (
                        <Text size="small" weight="semibold">
                            {visit.forms > 1
                                ? `${visit.forms} formulários`
                                : `${visit.forms} formulário`}
                        </Text>
                    ) : (
                        <Text size="small" weight="semibold">
                            Nenhum formulário
                        </Text>
                    )}
                </Row>
                <Row align="center" gap={"12px"}>
                    <RectangleStackIcon
                        width={24}
                        height={24}
                        color={theme.colors.secondary}
                    />
                    {visit.products >= 1 ? (
                        <Text size="small" weight="semibold">
                            {visit.products > 1
                                ? `${visit.products} produtos`
                                : `${visit.products} produto`}
                        </Text>
                    ) : (
                        <Text size="small" weight="semibold">
                            Nenhum produto
                        </Text>
                    )}
                </Row>
                <Row align="center" gap={"12px"}>
                    <ClockIcon
                        width={24}
                        height={24}
                        color={theme.colors.secondary}
                    />
                    <Text size="small" weight="semibold">
                        {Helper.formatTime(seconds)}
                    </Text>
                </Row>
            </Row>
            <Row gap={"6px"} align="center">
                {visit.completed === 0 && (
                    <Badge
                        variant="accent"
                        spacing={"xs"}
                        asCursor={true}
                        onClick={onEdit}
                    >
                        <PencilSquareIcon
                            width={24}
                            height={24}
                            color={theme.colors.secondary}
                        />
                    </Badge>
                )}
                {visit.completed === 0 && (
                    <Badge
                        variant="success"
                        spacing={"xs"}
                        asCursor={true}
                        onClick={onComplete}
                    >
                        <CheckCircleIcon width={24} height={24} />
                    </Badge>
                )}
                <Badge variant={visit.completed === 0 ? "accent" : "success"}>
                    {visit.completed === 0 ? (
                        <StopCircleIcon width={22} height={22} />
                    ) : (
                        <CheckCircleIcon width={22} height={22} />
                    )}
                    <Text weight="semibold">
                        {visit.completed === 0 ? "Pendente" : "Concluída"}
                    </Text>
                </Badge>
            </Row>
        </Row>
    );
}
