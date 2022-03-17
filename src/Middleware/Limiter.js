import {useEffect} from "react";

export default function Limit({cards, setLimiter}) {

    useEffect(() => {
        let count = cards.filter(e => e.isCompleted === false).length;

        return () => {
            if(count >= 9) {
                setLimiter(true);
            } else {
                setLimiter(false);
            }
        };
    }, [cards, setLimiter],);

    return (
        <></>
    )
}