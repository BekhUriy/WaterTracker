import { IconFrame, StyledAddWaterButton, StyledButton, StyledButtonBlue } from "./StyledaddWaterList"

export const IconButton = (props)=>{
    return(
        <StyledButton type="button">{props.children}</StyledButton>
    )
}
export const Icon = (props)=>{
    return(
    <IconFrame>{props.children}</IconFrame>)
}
export const AddWaterButton = (props)=>{
    return(
        <StyledAddWaterButton type="button">{props.children}</StyledAddWaterButton>
    )
}
export const IconButtonBlue = (props)=>{
    return(
        <StyledButtonBlue type="button">{props.children}</StyledButtonBlue>
    )
}