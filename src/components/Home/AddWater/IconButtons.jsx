import { IconFrame, StyledAddWaterButton, StyledButton } from "./StyledaddWaterList"

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