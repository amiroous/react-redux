import {useEffect, useState} from "react";

export default () => {

    const [latitude, setLatitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getCurrentPosition = () => {

        window.navigator.geolocation.getCurrentPosition(
            (position) => setLatitude(position.coords.latitude),
            (error) => setErrorMessage(error.message)
        );
    };

    useEffect(() => { getCurrentPosition() }, []);

    return [latitude, errorMessage];
};
