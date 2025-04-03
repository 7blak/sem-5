import React, { createContext, useState, useContext, ReactNode } from "react";

type PhotoContextType = {
    photoUri: string;
    setPhotoUri: (uri: string) => void;
};

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider = ({ children }: { children: ReactNode }) => {
    const [photoUri, setPhotoUri] = useState('https://reactjs.org/logo-og.png');

    return (
        <PhotoContext.Provider value={{ photoUri, setPhotoUri }}>
            {children}
        </PhotoContext.Provider>
    );
};

export const usePhotoContext = () => {
    const context = useContext(PhotoContext);
    if (!context) {
        throw new Error('usePhotoContext must be used within a PhotoProvider');
    }
    return context;
};

export default PhotoContext;