import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GroupWorkday } from "./components/GroupWorkday";
import { useVisit } from "./store/visit";
import { useMemo, useState } from "react";
import { Visit } from "./lib/interfaces";
import VisitModal from "./components/VisitModal";
import HomeLayout from "./layout/HomeLayout";
import Col from "./components/Flex/Col";
import Row from "./components/Flex/Row";
import "./App.css";

function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const {
        visits,
        getTotalSecondsByDate,
        getSecondsCompletedByDate,
        closeDate,
        setEditing,
        editing,
        updateVisit,
        makeVisitByForm,
        isDurationValidForVisit,
        completeVisit,
    } = useVisit();

    const groupedVisits = useMemo(() => {
        return visits.reduce(
            (acc, visit) => {
                (acc[visit.date] ||= []).push(visit);
                return acc;
            },
            {} as Record<string, Visit[]>,
        );
    }, [visits]);

    const sortedDates = Object.keys(groupedVisits).sort();

    return (
        <ThemeProvider theme={theme}>
            <HomeLayout>
                <Col gap={"12px"}>
                    {sortedDates.length > 0 && (
                        <Col gap={"32px"}>
                            {sortedDates.map((date, index) => (
                                <GroupWorkday
                                    key={index}
                                    date={date}
                                    visits={groupedVisits[date]}
                                    seconds={getTotalSecondsByDate(date)}
                                    secondsComplete={getSecondsCompletedByDate(
                                        date,
                                    )}
                                    handleEdit={(visit) => {
                                        setIsOpen(true);
                                        setEditing(visit);
                                    }}
                                    handleComplete={(visit) => {
                                        completeVisit(visit.id ?? "");
                                    }}
                                    onClose={() => closeDate(date)}
                                />
                            ))}
                        </Col>
                    )}
                    {sortedDates.length <= 0 && (
                        <Col>
                            <Row justify="center">
                                <p>Nenhuma visita registrada!</p>
                            </Row>
                        </Col>
                    )}
                </Col>
            </HomeLayout>
            <VisitModal
                isOpen={isOpen}
                visit={editing}
                onClose={() => setIsOpen(false)}
                onUpdate={(data, visit, resetForm) => {
                    if (
                        !isDurationValidForVisit(
                            data.date,
                            parseInt(data.forms),
                            parseInt(data.products),
                            visit.id,
                        )
                    ) {
                        return;
                    }

                    const visitCreated = makeVisitByForm(data, visit.id);

                    updateVisit(visit.id ?? "", visitCreated);
                    resetForm?.();
                    setIsOpen(false);
                }}
                title={"Editar Visita"}
            />
        </ThemeProvider>
    );
}

export default App;
