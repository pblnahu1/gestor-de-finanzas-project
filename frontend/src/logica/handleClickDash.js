export default function handleClickDash(handleStartHomeDashboardCLick) {
    const handle = (e) => {
        e.preventDefault();
        handleStartHomeDashboardCLick();
    }

    return handle
}