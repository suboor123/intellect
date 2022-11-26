export type PageType = 'circularSlider' | 'barRange'

export type NavbarProps = {
    onNavigate: (page: PageType) => void;
}