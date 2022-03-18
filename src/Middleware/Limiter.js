import {useEffect} from "react";

export default function Limit({cards, setLimiter}) {

    useEffect(() => {
        let count = cards.filter(e => e.isCompleted === false).length;

        if(count >= 9) {
            return setLimiter(true);
        } else {
            console.log(count);
            return setLimiter(false);
        }

    }, [cards, setLimiter],);

    return (
        <></>
    )
}