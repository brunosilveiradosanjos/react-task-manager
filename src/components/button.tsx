import { cva, type VariantProps } from 'class-variance-authority'
import Icon from './icon'
import Text from './text'

// Define base button styles and variants with class-variance-authority
// Variants allow you to change styles dynamically based on props
export const buttonVariants = cva(
  `flex items-center justify-center cursor-pointer transition rounded-lg group gap-2 duration-500`,
  {
    variants: {
      variant: {
        primary: 'bg-gray-200 hover:bg-pink-light',
      },
      size: {
        md: 'h-14 py-4 px-5',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  }
)

// Variants for the icon inside the button
export const buttonIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-pink-base',
    },
    size: {
      md: 'w-5 h-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

// Variants for the text inside the button
export const buttonTextVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-gray-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

// Define Button's prop types to match the variants and button attributes
interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg'] // Optional icon prop
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ className, disabled, size, variant })} // Apply variants to button
      {...props} // Spread other native button props
    >
      {/* Render icon if passed */}
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      {/* Render text children with proper styles */}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
