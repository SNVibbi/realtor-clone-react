import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useMemo, useState } from 'react';

export function UseAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() =>{
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedIn(true);
            }else {
                setLoggedIn(false)
            }
            setCheckingStatus(false);
        });

        return () => unsubscribe();

    }, []);


    const status = useMemo(() => ({loggedIn, checkingStatus}), [loggedIn, checkingStatus])

    return status;
}

// export default UseAuthStatus;
