import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { Container, Error } from "./styles";
import { useField } from "@unform/core";

//attribute type check
interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<Inputprops> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false); //focus
  const [isFilled, setIsFilled] = useState(false); //without focus

  //hooks form
  const { fieldName, error, registerField } = useField(name);

  //focusing
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  //without focus
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  // monitoring form
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
        {/* ligado com formulario */}
      </Container>
    </>
  );
};

export default Input;
