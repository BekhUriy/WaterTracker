import { Input, Label, ErrorMessage} from "./InputForm.styled"

const InputForm = ({ inputType, label, error, ...props }) => {
    if (inputType === 'dailyNorma') {
        return (
            <Label>
                {label}
                <Input {...props} />
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Label>
        )
    }
    return;
};

export default InputForm;