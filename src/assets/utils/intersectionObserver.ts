export const createIntersectionObserver = ({ action } : { action: (intersecting: boolean) => void }) => {
    
    const intersectionObserverOptions = {
        rootMargin: "10%",
        threshold: 1.0,
    };
    
    const observerCallback : IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {           
            return action(entry.isIntersecting)
        })
    }

    return new IntersectionObserver(observerCallback, intersectionObserverOptions)
}
