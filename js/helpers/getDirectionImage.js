export default (angle) => {
    if (angle < 180) {
        return "./img/east-bound.png";
    } else {
        return "./img/west-bound.png";
    }
}