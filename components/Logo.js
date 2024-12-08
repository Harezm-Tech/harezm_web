import Image from 'next/image';

function Logo() {
    return (
        <div style={logoStyle}>
            <Image 
                src="/logo/logo.png" 
                alt="Logo" 
                width={150}
                height={50}
                priority
            />
        </div>
    );
}

// edit_1: Karanlık mod için logo stilini güncelle
const logoStyle = {
    filter: 'invert(1)', // Karanlık modda okunabilirlik için
    // ... diğer stil ayarları ...
}; 

export default Logo;