import {motion} from 'frame-motion';

const Background = ({children, onClick}) => {

    return (
        <motion.div
        className="backdrop"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )

}