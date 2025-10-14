export const fromLeftToRight = {
    initial:{
        opacity:0,
        x:-50
    },
    whileInView:{
        opacity:1,
        x:0
    }
}

export const fromRightToLeft = {
    initial:{
        opacity:0,
        x:50
    },
    whileInView:{
        opacity:1,
        x:0
    }
}

export const fromBottomToTop = {
    initial:{
        opacity:0,
        y:100
    },
    whileInView:{
        opacity:1,
        y:0
    }
}

export const fromTopToBottom = {
    initial:{
        opacity:0,
        y:-100
    },
    whileInView:{
        opacity:1,
        y:0
    }
}



export const fadeIn = {
    initial:{
        opacity:0
    },
    whileInView:{
        opacity:1
    }
}

export const others = {
    transition:{
        duration:0.7,
        ease:"easeInOut"
    },
    fadeInTransition:{
        duration:1,
        ease:"easeInOut"
    },
    viewport:{
        once:true
    }
}