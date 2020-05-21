import React from "react"
import {Wrapper, Sidebar} from "./../component/styled"

export default function AuthLayout (props){
    console.log("==== props ===",props)
    return (
        <>
            {/* <Sidebar /> */}
            <Wrapper>
                {props.children}
            </Wrapper>
        </>
    )
}
