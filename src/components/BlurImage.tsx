import Image from "next/image";
import { useState } from "react";
import { cx } from "@/hooks/cx";

const BlurImage = (props) => {
    const { className, ...other } = props;
    const [isLoading, setLoading] = useState(true)
  
    return (
        <Image
            className={cx(
                className,
                'duration-700 ease-in-out group-hover:opacity-75',
                isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
            {...other}
        />
    )
}

export default BlurImage;