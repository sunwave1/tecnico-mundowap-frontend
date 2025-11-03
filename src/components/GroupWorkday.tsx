import { AnimatePresence } from "framer-motion";
import { useCallback } from "react";
import { Helper } from "../lib/helper";
import type { Visit } from "../lib/interfaces";
import Col from "./Flex/Col";
import { Visit as VisitComponent } from "./Visit/Visit";
import { Workday } from "./Workday/Workday";

export const MAX_DURATION = 28800;

interface GroupWorkdayProps {
    date: string;
    visits: Array<Visit>;
    seconds: number;
    secondsComplete: number;
    onClose: () => void;
    handleEdit: (visit: Visit) => void;
    handleComplete: (visit: Visit) => void;
}

export function GroupWorkday({
    visits,
    date,
    seconds,
    secondsComplete,
    onClose,
    handleEdit,
    handleComplete,
}: GroupWorkdayProps) {
    const schedulePercent = (seconds / MAX_DURATION) * 100;
    const percentComplete = seconds > 0 ? (secondsComplete / seconds) * 100 : 0;

    const getProgressColor = useCallback(() => {
        if (percentComplete < 60) return "secondary";
        if (percentComplete > 90) return "success";
        return "blue";
    }, [percentComplete]);

    return (
        <Col gap={"12px"}>
            <Workday.Root>
                <Workday.Wrapper>
                    <Workday.Header
                        date={Helper.formatDate(date)}
                        visitCount={visits.length}
                        onClose={onClose}
                    />
                    <Workday.Footer>
                        <Workday.Progress
                            title={"Tempo agendado"}
                            subtitle={`${Helper.formatTime(seconds)} / ${Helper.formatTime(MAX_DURATION)}`}
                            progress={schedulePercent}
                        />
                        <Workday.Progress
                            title={"Tempo concluído"}
                            subtitle={`${Helper.formatTime(secondsComplete)} / (${percentComplete.toFixed(0)}%)`}
                            progress={percentComplete}
                            progressColor={getProgressColor()}
                        />
                    </Workday.Footer>
                </Workday.Wrapper>
            </Workday.Root>
            <Col gap={"6px"}>
                <AnimatePresence mode={"popLayout"}>
                    {visits.map((visit, idx) => (
                        <VisitComponent.Root
                            key={visit.id}
                            layoutId={(visit.id ?? idx).toString()}
                        >
                            <VisitComponent.Wrapper>
                                <VisitComponent.Header
                                    visit={visit}
                                    seconds={Helper.calculateDuration(
                                        visit.forms,
                                        visit.products,
                                    )}
                                    onComplete={() => handleComplete(visit)}
                                    onEdit={() => handleEdit(visit)}
                                />
                                <VisitComponent.Footer
                                    address={visit.address}
                                />
                            </VisitComponent.Wrapper>
                        </VisitComponent.Root>
                    ))}
                </AnimatePresence>
            </Col>
        </Col>
    );
}
