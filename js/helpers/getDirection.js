export default (angle) => {
    if (angle < 180) {
        return "east-bound";
    } else {
        return "west-bound";
    }
}