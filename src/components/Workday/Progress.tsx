import { Text } from "../ui/Text/Text";
import Col from "../ui/Flex/Col";
import Row from "../ui/Flex/Row";
import Progressbar from "../ui/Progressbar/Progressbar";

interface ProgressProps {
    title: string;
    subtitle?: string;
    progress?: number;
    progressColor?: string;
}

export default function Progress({
    title,
    subtitle,
    progress = 0,
    progressColor = "secondary",
}: ProgressProps) {
    return (
        <Col>
            <Row justify="between">
                <Text color="black" size={"medium"} weight="semibold">
                    {title}
                </Text>
                {subtitle && (
                    <Text color="black" size={"medium"} weight="semibold">
                        {subtitle}
                    </Text>
                )}
            </Row>
            <Progressbar
                height={10}
                progress={progress}
                color={progressColor}
            />
        </Col>
    );
}
