interface ExternalLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode;
}

export default function ExternalLink({
    className,
    href,
    children,
    ...props
}: ExternalLinkProps) {
    return (
        <a
            onClick={(e) => {
                e.preventDefault();
                if (href) {
                    window.electronAPI.openExternal(href);
                }
            }}
            className={`cursor-pointer ${className || ""}`}
            {...props}
        >
            {children}
        </a>
    );
}
