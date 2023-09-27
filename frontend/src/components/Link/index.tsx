import Link from 'next/link'

export default function NextLink({ children, href, ...props}) {
    return (
        <Link href={href} passHref>
            {children}
        </Link>
    )
}
