'use client';
import { PropsWithChildren, createContext, useContext } from "react";
import { message } from "antd";
import { MessageInstance } from "antd/es/message/interface";

type MainWrapperProps = PropsWithChildren;
type MainContextInterface = {
    messageApi: MessageInstance;
};

const MainContext = createContext<MainContextInterface | null>(null);


export const useMainContext = () => {
    const context = useContext(MainContext);

    if (!context) throw new Error("Use context within MainContext Provider");

    return context;
};


export function MainWrapper(props: MainWrapperProps) {

    const [messageApi, contextHolder] = message.useMessage();

    return (
        <MainContext.Provider value={{messageApi}}>
            <main>
                {contextHolder}
                {props.children}
            </main>
        </MainContext.Provider>
    );

}