import axios from "axios";
import { createUserWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "../firebase.config";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
//const githubProvider = new GithubAuthProvider();

//social auth provider
const FirebaseProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    //console.log(user);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    //sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //gitHub login
    // const githubLogIn = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, githubProvider)
    // }

    //logout
    const logout = async () => {
        //setUser(null);
        // setLoading
        // const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
        //     withCredentials: true
        // })

       // console.log(data);
        signOut(auth);
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            //if (user) {
            setUser(user);
            setLoading(false);
            //}
        });

        return () => unsubscribe();
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogIn,
      //  githubLogIn,
        logout,
        user,
        loading,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={allValues}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;