export function useWinResize() {
    let winHeight = ref(0);
    function getWinHeight() {
        winHeight.value = window.innerHeight;
    };
    onMounted(() => {
        window.addEventListener("resize", () => {
            getWinHeight();
        });
        getWinHeight();
    })
    onUnmounted(() => {
        window.removeEventListener("resize", getWinHeight);
    })
    return {
        winHeight
    }
}