export const createIntersectionObserver = ({ action } : { action: (intersecting: boolean) => void }) => {
    
    const intersectionObserverOptions = {
        rootMargin: "50px 0px -200px 0px",
        threshold: .1,
    };
    
    const observerCallback : IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {           
            return action(entry.isIntersecting)
        })
    }

    return new IntersectionObserver(observerCallback, intersectionObserverOptions)
}
