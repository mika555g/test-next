import React, {useState} from 'react';
import Button from "@/components/button/Button";

const Main: React.FC = () => {
    const [showText, setShowText] = useState<boolean>(false)

    const onclick = () => {
        setShowText(!showText);
    }

    return (
        <div>
            {showText && <h1>Hello World!</h1>}
            <Button onClick={onclick}>Say Hi</Button>
        </div>
    );
};

export default Main;
