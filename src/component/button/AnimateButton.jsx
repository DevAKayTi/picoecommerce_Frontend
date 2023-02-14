import {motion} from 'framer-motion';

export default function AnimateButton({children,loading}){

    return (
        <>
            {
                !loading ? (
                    <div>
                        {children}
                    </div>
                ) : (
                    <div>
                        {children}
                    </div>
                )
            }
        </>
    )
}