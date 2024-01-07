import React from "react";
import { NativeRouter } from "react-router-native";

import BottomNav from "../components/BottomNav";

const Routes = () => {
    return (
        <>
            <NativeRouter>
                <BottomNav/>
            </NativeRouter>
        </>
    )
}

export default Routes;