import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';

type BtnType = 'PRIMARY' | 'WHITE';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  btnType: BtnType
}

const PRIMARY_BTN_STYLE = 'px-3 py-2 bg-green rounded text-white';
const WHITE_BTN_STYLE = 'px-3 py-2 bg-white border-border rounded';

const Button = ({ className, children, btnType, ...props }: BtnProps) => {
  const style = useMemo(() => btnType === 'PRIMARY' ? PRIMARY_BTN_STYLE : WHITE_BTN_STYLE, [btnType]);
  return (
    <button className={`${style} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button;
