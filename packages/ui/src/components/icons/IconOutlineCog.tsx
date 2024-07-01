import { IconProps } from './types'

export const IconOutlineCog = ({ size = '1em', ...props }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			focusable="false"
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M9.353 4.081c.674-2.775 4.62-2.775 5.294 0a.724.724 0 0 0 1.08.448c2.44-1.486 5.23 1.305 3.744 3.744a.724.724 0 0 0 .448 1.08c2.775.674 2.775 4.62 0 5.294a.724.724 0 0 0-.448 1.08c1.486 2.44-1.305 5.23-3.744 3.744a.724.724 0 0 0-1.08.448c-.674 2.775-4.62 2.775-5.294 0a.724.724 0 0 0-1.08-.448c-2.44 1.486-5.23-1.305-3.744-3.744a.724.724 0 0 0-.448-1.08c-2.775-.674-2.775-4.62 0-5.294a.724.724 0 0 0 .448-1.08c-1.486-2.44 1.305-5.23 3.744-3.744a.724.724 0 0 0 1.08-.448Zm3.35.472c-.178-.737-1.227-.737-1.407 0a2.724 2.724 0 0 1-4.064 1.684c-.648-.395-1.39.347-.995.995a2.723 2.723 0 0 1-1.684 4.064c-.737.18-.737 1.229 0 1.408a2.724 2.724 0 0 1 1.684 4.064c-.395.648.347 1.39.995.995a2.724 2.724 0 0 1 4.064 1.684c.18.737 1.229.737 1.408 0a2.724 2.724 0 0 1 4.064-1.684c.648.395 1.39-.347.995-.995a2.724 2.724 0 0 1 1.684-4.064c.737-.18.737-1.229 0-1.408a2.724 2.724 0 0 1-1.684-4.064c.395-.648-.347-1.39-.995-.995a2.723 2.723 0 0 1-4.064-1.684ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
