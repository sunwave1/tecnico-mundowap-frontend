import { Addresses } from "../../lib/interfaces";
import Col from "../Flex/Col";
import { Text } from "../Text/Text";

interface FooterProps {
    address: Addresses;
}

export default function Footer({ address }: FooterProps) {
    return (
        <Col>
            <Text size="medium" weight="semibold">
                {address.street}, {address.street_number} - {address.cep}
            </Text>
            <Text size="small" weight="semibold" color="muted">
                {address.sublocality}, {address.city} - {address.uf}
            </Text>
        </Col>
    );
}
