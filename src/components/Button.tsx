declare interface ButtonProps {
  label: string;
  color: 'blue' | 'pink' | 'cyan' | 'purple' | 'ice' | 'green' | 'white';
  variant?: 'default' | 'glass' | 'contained';
  onClick?: Function;
  className?: string;
}

const Button = ({ label, color, variant, onClick, className }: ButtonProps) => {
  className = typeof className === 'string' ? ' ' + className : '';

  const backgroundColor = variant === 'glass' ? 'white' : `${color}-400`;
  const hoverBackgroundColor =
    variant === 'glass' ? `${color}-200` : backgroundColor;
  const shadowColor = color !== 'white' ? `${color}-100` : 'white';
  let opacity = '75';

  if (variant === 'glass') {
    opacity = '30';
  } else if (variant === 'contained') {
    opacity = '90';
  }

  const labelColor = 'white';
  let activeStyle = ` hover:bg-${hoverBackgroundColor}`;
  if (variant !== 'contained') {
    activeStyle += ` hover:shadow-center hover:shadow-${shadowColor}/50 hover:drop-shadow-center-sm`;
  }

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof onClick === 'function') {
          onClick();
        }
      }}
      className={
        `border border-[#FFFFFF40] rounded-xl bg-${backgroundColor}/${opacity} px-4 py-2 text-base font-medium text-white transition ${
          variant === 'glass' ? 'hover:text-' + labelColor : ''
        } duration-200` +
        activeStyle +
        className
      }
    >
      {label}
    </button>
  );
};

export default Button;
